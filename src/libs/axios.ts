import originalAxios, { AxiosError, AxiosResponse } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

import { isErrorResponse } from 'types/ErrorResponse';

import Domain from 'constants/Domain';
import { USE_API_MOCK } from 'constants/env';

// check axios response type
const isAxiosResponse = (item: unknown): item is AxiosResponse => {
    const response = item as AxiosResponse<typeof item>;
    return (
        typeof response === 'object' &&
        response.data !== undefined &&
        typeof response.status === 'number' &&
        response.config !== undefined
    );
};

// check axios error type
const isAxiosError = (item: unknown): item is AxiosError => {
    const error = item as AxiosError<typeof item>;
    return (
        typeof error === 'object' &&
        typeof error.name === 'string' &&
        typeof error.message === 'string' &&
        error.config !== undefined &&
        (typeof error.code === 'undefined' || typeof error.code === 'string') &&
        typeof error.isAxiosError === 'boolean'
    );
};

const axios = originalAxios.create({
    baseURL: Domain.API_URL,
    timeout: 2500,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
});

axios.interceptors.response.use(
    // response 가공
    (response) => (isAxiosResponse(response) ? response.data : response),

    // error 데이터 가공
    (error) => {
        // axios 외부의 에러인 경우
        if (!isAxiosError(error)) {
            throw error;
        }

        // axios 내부 에러인 경우
        if (!isAxiosResponse(error.response)) {
            throw error.response;
        }

        // response 에러가 아닌경우
        if (!isErrorResponse(error.response.data)) {
            throw error.response.data;
        }

        // api response 에서 발생한 에러인 경우
        throw error.response.data.message;
    }
);

// axios-mock-adapter
export const axiosMock = (options = {}): AxiosMockAdapter | null =>
    USE_API_MOCK ? new AxiosMockAdapter(axios, options) : null;

export default axios;
