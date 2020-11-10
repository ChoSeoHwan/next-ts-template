import { combineModules } from 'libs/immerReducer';

import { TestModule } from 'modules/TestModule';

const rootReducer = combineModules({
    TestReducer: TestModule
});

export type RootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;
