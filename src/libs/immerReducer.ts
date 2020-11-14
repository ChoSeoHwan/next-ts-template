import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer as BaseImmerReducer,
    ImmerReducerClass as BaseImmerReducerClass,
    ImmerReducerFunction
} from 'immer-reducer';
import {
    CombinedState,
    combineReducers,
    Reducer,
    StateFromReducersMapObject
} from 'redux';
import { mapObject } from 'underscore';

import { hydrateActions } from 'sagas/HydrateSaga';

export abstract class ImmerReducer<T> extends BaseImmerReducer<T> {
    abstract initialState: T;
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
): Reducer<CombinedState<StateFromReducersMapObject<ModulesMapObject<T>>>> {
    const map = (module, moduleName) => {
        if (typeof module.prototype['hydrate'] === 'function') {
            hydrateActions[moduleName] = createActionCreators(module);
        }

        const moduleObject = new module();
        return createReducerFunction(module, moduleObject.initialState);
    };

    return combineReducers(mapObject<T, typeof map>(modules, map));
}

export * from 'immer-reducer';
