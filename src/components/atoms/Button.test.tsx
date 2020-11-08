import React from 'react';

import render from 'libs/testUtils';

import Button from 'components/atoms/Button';

describe('Components | Atoms | <Button />', () => {
    const text = 'text';

    it('should children exists', () => {
        const { getByText } = render(<Button>{text}</Button>);

        expect(getByText(text)).toHaveTextContent(text);
    });
});
