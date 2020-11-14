import { delay, put, takeEvery } from '@redux-saga/core/effects';

import { TestAction } from 'modules/TestModule';

function* delayIncrease(number: number): Generator {
    yield delay(2000);
    yield put(TestAction.increase(number));
}

export function* TestSaga(): Generator {
    yield takeEvery<ReturnType<typeof TestAction.delayIncrease>>(
        TestAction.delayIncrease.type,
        ({ payload }) => delayIncrease(payload)
    );
}
