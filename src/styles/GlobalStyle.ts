import { css } from '@emotion/core';

import { Theme } from 'styles/Themes';

export const GlobalStyle = (theme: Theme): ReturnType<typeof css> => css`
    @font-face {
        font-family: 'Product Sans Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Regular'),
            url('/fonts/ProductSans-Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Italic'),
            url('/fonts/ProductSans-Italic.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Thin Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Thin Regular'),
            url('/fonts/ProductSans-Thin.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Light Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Light Regular'),
            url('/fonts/ProductSans-Light.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Medium Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Medium Regular'),
            url('/fonts/ProductSans-Medium.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Black Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Black Regular'),
            url('/fonts/ProductSans-Black.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Thin Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Thin Italic'),
            url('/fonts/ProductSans-ThinItalic.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Light Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Light Italic'),
            url('/fonts/ProductSans-LightItalic.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Medium Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Medium Italic'),
            url('/fonts/ProductSans-MediumItalic.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Bold'),
            url('/fonts/ProductSans-Bold.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Bold Italic'),
            url('/fonts/ProductSans-BoldItalic.woff') format('woff');
    }

    @font-face {
        font-family: 'Product Sans Black Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Product Sans Black Italic'),
            url('/fonts/ProductSans-BlackItalic.woff') format('woff');
    }

    @font-face {
        font-family: 'NanumGothic';
        src: url('/fonts/NanumGothic.eot');
        src: url('/fonts/NanumGothic.eot') format('embedded-opentype'),
            url('/fonts/NanumGothic.woff') format('woff');
    }

    html {
        font-size: 10px;
        font-family: 'NanumGothic', 'Product Sans Regular', Roboto, Arial, serif;
    }

    body {
        font-size: 1.4rem;
        background: ${theme.colors.bodyBackground};
        color: ${theme.colors.primaryText};
        margin: 0;
        padding: 0;
        line-height: 1.34;
    }

    p,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    span,
    button,
    input,
    ul,
    li {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
        background: inherit;
    }
`;
