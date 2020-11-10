import { Store } from 'redux';
import { END } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { SagaStore } from 'modules/store';

import { HydrateSaga } from 'sagas/HydrateSaga';
import { TestSaga } from 'sagas/TestSaga';

// root saga
export function* rootSaga(): Generator {
    yield all([call(TestSaga), call(HydrateSaga)]);
}

/**
 * end saga process when ssr
 * @param store
 */
export const endServerSideSaga = async (store: Store): Promise<void> => {
    const sagaStore = store as SagaStore;
    if (sagaStore.sagaTask) {
        sagaStore.dispatch(END);
        await sagaStore.sagaTask.toPromise();
    }
};
