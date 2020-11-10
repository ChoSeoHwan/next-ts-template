import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer, { RootReducerState } from 'modules/index';

import { rootSaga } from 'sagas';

export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const initStore = (): ReturnType<MakeStore<RootReducerState>> => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<RootReducerState>(initStore, {
    debug: true
});
