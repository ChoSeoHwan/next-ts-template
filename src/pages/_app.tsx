import React, { FC } from 'react';
import { AppProps } from 'next/app';

import AppProvider from 'libs/AppProvider';

import { wrapper } from 'modules/store';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
};

export default wrapper.withRedux(App);
