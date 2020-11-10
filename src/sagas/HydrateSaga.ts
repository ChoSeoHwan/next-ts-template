import { HYDRATE } from 'next-redux-wrapper';
import { all, put, take } from '@redux-saga/core/effects';
import { createActionCreators } from 'immer-reducer';
import { mapObject, values } from 'underscore';

import { RootReducerState } from 'modules';

interface HydrateActions {
    [key: string]: ReturnType<typeof createActionCreators>;
}

// hydrate 발생 시 동기화 해줄 action 리스트
export const hydrateActions: HydrateActions = {};

interface HydrateAction {
    type: typeof HYDRATE;
    payload: RootReducerState;
}

/**
 * hydrate 발생 시 각 reducer 와 동기화
 * @constructor
 */
export function* HydrateSaga(): Generator {
    const { payload } = (yield take(HYDRATE)) as HydrateAction;

    const actions = values(
        mapObject(hydrateActions, (action, name) =>
            typeof action['hydrate'] === 'function'
                ? put(action['hydrate'](payload[name]))
                : null
        )
    );

    yield all(actions);
}
