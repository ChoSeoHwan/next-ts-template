import MockAdapter from 'axios-mock-adapter';

import test from 'mocks/test';

import { axiosMock } from 'libs/axios';

import { USE_API_MOCK } from 'constants/env';

export type ApiMock = (apiMock: MockAdapter) => void;

const mocks: ApiMock[] = [test];

type InitApiMock = (mock: ReturnType<typeof axiosMock>) => void;

export const initApiMock: InitApiMock = (axiosMock) => {
    if (!USE_API_MOCK || axiosMock === null) {
        return;
    }

    mocks.forEach((mock) => {
        mock(axiosMock);
    });
};
