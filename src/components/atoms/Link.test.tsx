import React from 'react';

import render from 'libs/testUtils';

import Link from 'components/atoms/Link';

describe('Components | Atoms | <Link />', () => {
    const text = 'link';
    const pathname = '/calendar';
    const renderComponent = () => render(<Link href={pathname}>{text}</Link>);

    it('should contain children', () => {
        const { getByText } = renderComponent();

        expect(getByText(text)).toHaveTextContent(text);
    });
});
