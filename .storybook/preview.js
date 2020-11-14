import React from 'react';

import AppProvider from '../src/libs/AppProvider';
import { initStore } from '../src/modules/store';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
    (Story) => (
        <AppProvider store={initStore()}>
            <Story />
        </AppProvider>
    )
];
