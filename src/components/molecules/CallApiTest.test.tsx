import React from 'react';
import { fireEvent } from '@testing-library/dom';

import { axiosMock } from 'libs/axios';
import render from 'libs/testUtils';

import CallApiTest from 'components/molecules/CallApiTest';

describe('Components | Molecules | <CallApiTest />', () => {
    const name = 'Test Name';

    it('should call api button exists', () => {
        const { getByText } = render(<CallApiTest />);

        const button = getByText('Call Api');
        expect(button).toBeInTheDocument();
    });

    it('should change input value', () => {
        const { getByPlaceholderText } = render(<CallApiTest />);

        const input = getByPlaceholderText('input name');
        fireEvent.change(input, { target: { value: name } });

        expect(input).toHaveValue(name);
    });

    it('should call api and show response text', async () => {
        const responseData = `Test axios mock and name is : ${name}`;

        const mock = axiosMock({ delayResponse: 2000 });
        if (mock) {
            mock.onGet('/api/test').reply(200, {
                data: responseData
            });
        }

        const { getByPlaceholderText, getByText, findByText } = render(
            <CallApiTest />
        );

        const input = getByPlaceholderText('input name');
        fireEvent.change(input, { target: { value: name } });

        const button = getByText('Call Api');

        fireEvent.click(button);

        const text = await findByText(responseData, undefined, {
            timeout: 3000
        });
        expect(text).toBeInTheDocument();
    });
});
