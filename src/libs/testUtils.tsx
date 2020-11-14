import React, { FC, PropsWithChildren } from 'react';
import { render as reactRender } from '@testing-library/react';

import AppProvider from 'libs/AppProvider';

import { initStore } from 'modules/store';

const TestWrapper: FC = ({ children }: PropsWithChildren<null>) => {
    return <AppProvider store={initStore()}>{children}</AppProvider>;
};

/**
 * 각종 provider 적용
 * @param ui
 * @param options
 */
const render = (
    ui: React.ReactElement,
    { ...options } = {}
): ReturnType<typeof reactRender> =>
    reactRender(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export default render;
