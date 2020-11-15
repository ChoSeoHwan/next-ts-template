import { createActionCreators, ImmerReducer } from 'libs/immerReducer';

import ApiStatus from 'constants/ApiStatus';

interface TestModuleState {
    status: ApiStatus;
    data: string;
}

export class TestModule extends ImmerReducer<TestModuleState> {
    public initialState = {
        status: ApiStatus.CLEAR,
        data: ''
    };

    public hydrate(payload: TestModuleState): void {
        this.draftState = payload;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public fetchData(name: string): void {
        this.draftState.status = ApiStatus.LOADING;
    }

    public fetchDataSuccess(data: string): void {
        this.draftState.status = ApiStatus.SUCCESS;
        this.draftState.data = data;
    }

    public fetchDataError(error: string): void {
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.data = error;
    }
}

export const TestAction = createActionCreators(TestModule);
