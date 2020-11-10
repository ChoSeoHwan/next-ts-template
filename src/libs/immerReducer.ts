import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer as BaseImmerReducer,
    ImmerReducerClass as BaseImmerReducerClass
} from 'immer-reducer';
import { combineReducers } from 'redux';
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

export function combineModules<T extends ImmerReducerClass>(
    modules: Modules<T>
): ReturnType<typeof combineReducers> {
    const reducerList = mapObject(modules, (module, moduleName) => {
        if (typeof module.prototype['hydrate'] === 'function') {
            hydrateActions[moduleName] = createActionCreators(module);
        }

        return createReducerFunction(module, module.prototype['initialState']);
    });

    return combineReducers(reducerList);
}

export * from 'immer-reducer';
