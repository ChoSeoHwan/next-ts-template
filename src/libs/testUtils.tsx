import React, { FC, PropsWithChildren } from 'react';
import { render as reactRender } from '@testing-library/react';

import AppProvider from 'libs/AppProvider';

const TestWrapper: FC = ({ children }: PropsWithChildren<null>) => {
    return <AppProvider>{children}</AppProvider>;
};

const render = (
    ui: React.ReactElement,
    { ...options } = {}
): ReturnType<typeof reactRender> =>
    reactRender(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export default render;
