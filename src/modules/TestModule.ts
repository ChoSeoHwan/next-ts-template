import { createReducerFunction } from 'immer-reducer';

import { createActionCreators, ImmerReducer } from 'libs/immerReducer';

interface TestModuleState {
    data: number;
}

export class TestModule extends ImmerReducer<TestModuleState> {
    public initialState = {
        data: 0
    };

    public hydrate(payload: TestModuleState): void {
        this.draftState = payload;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public delayIncrease(number: number): void {
        return;
    }

    public increase(number: number): void {
        this.draftState.data += number;
    }

    public decrease(): void {
        this.draftState.data--;
    }
}

TestModule.prototype.initialState = {
    data: 0
};

export const TestReducer = createReducerFunction(TestModule);
export const TestAction = createActionCreators(TestModule);
