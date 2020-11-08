import React from 'react';
import { fireEvent } from '@testing-library/dom';

import render from 'libs/testUtils';

import Button from 'components/atoms/Button';

describe('Components | Atoms | <Button />', () => {
    const text = 'text';

    it('should children exists', () => {
        const { getByText } = render(<Button>{text}</Button>);

        expect(getByText(text)).toHaveTextContent(text);
    });

    it('should active onClick event', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Button onClick={handleClick}>{text}</Button>
        );

        fireEvent.click(getByText(text));

        expect(handleClick).toBeCalled();
    });
});
