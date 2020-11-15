import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'config/moment/locale';

import { initApiMock } from 'mocks';

import { axiosMock } from 'libs/axios';

import { initStore } from 'modules/store';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme, theme as baseTheme } from 'styles/Themes';

import ConditionWrapper from 'components/atoms/ConditionWrapper';

// api 모킹 추가 (NEXT_PUBLIC_USE_API_MOCK 에 따라 on/off)
initApiMock(axiosMock({ delayResponse: 300 }));

interface AppProvider {
    store?: ReturnType<typeof initStore>;
    theme?: Theme;
    style?: ReturnType<typeof css> | ((theme: Theme) => ReturnType<typeof css>);
}

const AppProvider: FC<AppProvider> = ({
    store,
    theme = baseTheme,
    style = GlobalStyle,
    children
}: PropsWithChildren<AppProvider>) => (
    <ConditionWrapper
        condition={!!store}
        wrapper={(children) =>
            store ? <Provider store={store}>{children}</Provider> : children
        }>
        <ThemeProvider theme={theme}>
            <Global styles={style} />
            {children}
        </ThemeProvider>
    </ConditionWrapper>
);

export default AppProvider;
