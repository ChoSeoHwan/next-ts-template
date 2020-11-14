import { expectSaga } from 'redux-saga-test-plan';

import rootReducer, { RootReducerState } from 'modules';
import { TestAction } from 'modules/TestModule';

import { TestSaga } from 'sagas/TestSaga';

describe('Sagas | TestSaga', () => {
    it('should be executed delay increase', async () => {
        const number = 2;

        const { storeState } = await expectSaga(TestSaga)
            .withReducer(rootReducer)
            .put(TestAction.increase(number))
            .dispatch(TestAction.delayIncrease(number))
            .run({ timeout: 3000 });

        const state = storeState as RootReducerState;

        expect(state.TestReducer.data).toBe(number);
    });
});
