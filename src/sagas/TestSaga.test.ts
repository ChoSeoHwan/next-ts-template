import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';

import ApiStatus from 'constants/ApiStatus';

import rootReducer, { RootReducerState } from 'modules';
import { TestAction } from 'modules/TestModule';

import { fetchTestApi, TestSaga } from 'sagas/TestSaga';

describe('Sagas | TestSaga', () => {
    it('should be executed test api', async () => {
        const name = 'TestName';
        const responseData = `Mocking call and name is : ${name}`;

        const { storeState } = await expectSaga(TestSaga)
            .withReducer(rootReducer) // reducer 등록
            .provide([[call.fn(fetchTestApi), { data: responseData }]]) // api mocking
            .put(TestAction.fetchDataSuccess(responseData)) // put matcher
            .dispatch(TestAction.fetchData(name)) // dispatch action
            .run({ timeout: 3000 });

        const state = storeState as RootReducerState;

        expect(state.TestReducer).toEqual({
            status: ApiStatus.SUCCESS,
            data: responseData
        });
    });
});
