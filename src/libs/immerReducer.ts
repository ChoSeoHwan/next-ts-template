import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer as BaseImmerReducer,
    ImmerReducerClass as BaseImmerReducerClass,
    ImmerReducerFunction
} from 'immer-reducer';
import {
    ActionFromReducersMapObject,
    CombinedState,
    combineReducers,
    Reducer,
    StateFromReducersMapObject
} from 'redux';
import { mapObject } from 'underscore';

import { hydrateActions } from 'sagas/HydrateSaga';

export class ImmerReducer<T> extends BaseImmerReducer<T> {
    public initialState: T;
}

interface ImmerReducerClass extends BaseImmerReducerClass {
    new (...args: unknown[]): ImmerReducer<unknown>;
}

interface Modules<T extends ImmerReducerClass> {
    [key: string]: T;
}

type ModulesMapObject<M extends Modules<ImmerReducerClass>> = {
    [K in keyof M]: ImmerReducerFunction<M[K]>;
};

export function combineModules<T extends Modules<ImmerReducerClass>>(
    modules: T
): Reducer<
    CombinedState<StateFromReducersMapObject<ModulesMapObject<T>>>,
    ActionFromReducersMapObject<ModulesMapObject<T>>
> {
    const map = (module, moduleName) => {
        if (typeof module.prototype['hydrate'] === 'function') {
            hydrateActions[moduleName] = createActionCreators(module);
        }

        return createReducerFunction(module, module.prototype['initialState']);
    };

    return combineReducers(mapObject<T, typeof map>(modules, map));
}

export * from 'immer-reducer';
