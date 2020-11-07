import React, { FC } from 'react';
import { AppProps } from 'next/app';

import AppProvider from 'libs/AppProvider';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
};

export default App;
