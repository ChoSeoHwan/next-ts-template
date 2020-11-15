import { call, put, takeEvery } from '@redux-saga/core/effects';

import axios from 'libs/axios';

import { TestAction } from 'modules/TestModule';

export const fetchTestApi = (name: string): Promise<unknown> => {
    const params = { name };

    return axios.get('/api/test', { params });
};

function* fetchData(name: string) {
    try {
        const response = yield call(fetchTestApi, name);

        yield put(TestAction.fetchDataSuccess(response.data));
    } catch (error) {
        yield put(
            TestAction.fetchDataError(
                typeof error === 'string' ? error : 'ERROR'
            )
        );
    }
}

export function* TestSaga(): Generator {
    yield takeEvery<ReturnType<typeof TestAction.fetchData>>(
        TestAction.fetchData.type,
        ({ payload }) => fetchData(payload)
    );
}
