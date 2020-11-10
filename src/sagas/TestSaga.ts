import { delay, fork, put, takeEvery } from '@redux-saga/core/effects';

import { TestAction } from 'modules/TestModule';

function* delayIncrease(number: number): Generator {
    yield delay(2000);
    yield put(TestAction.increase(number));
}

export function* delayIncreaseSaga(): Generator {
    yield takeEvery<ReturnType<typeof TestAction.delayIncrease>>(
        TestAction.delayIncrease.type,
        ({ payload }) => delayIncrease(payload)
    );
}

export function* TestSaga(): Generator {
    yield fork(delayIncreaseSaga);
}
