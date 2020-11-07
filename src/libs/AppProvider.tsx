import React, { FC, PropsWithChildren } from 'react';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'config/moment/locale';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Theme, theme as baseTheme } from 'styles/Themes';

interface AppProvider {
    theme?: Theme;
    style?: ReturnType<typeof css> | ((theme: Theme) => ReturnType<typeof css>);
}

const AppProvider: FC<AppProvider> = ({
    theme = baseTheme,
    style = GlobalStyle,
    children
}: PropsWithChildren<AppProvider>) => (
    <ThemeProvider theme={theme}>
        <Global styles={style} />
        {children}
    </ThemeProvider>
);

export default AppProvider;
