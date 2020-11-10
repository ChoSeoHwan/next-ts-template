import React from 'react';

import render from 'libs/testUtils';

import ConditionWrapper from 'components/atoms/ConditionWrapper';

describe('Components | Atoms | <ConditionWrapper />', () => {
    const childrenText = 'childrenText';
    const renderComponent = (condition, wrapper, denyWrapper) =>
        render(
            <ConditionWrapper
                condition={condition}
                wrapper={wrapper}
                denyWrapper={denyWrapper}>
                <p>{childrenText}</p>
            </ConditionWrapper>
        );

    describe('should return allow wrapper when condition true and ', () => {
        it('wrapper is string', () => {
            const { container } = renderComponent(true, 'div', null);
            const div = container.querySelector('div');

            expect(div).toHaveTextContent(childrenText);
        });

        it('wrapper is ReactNode', () => {
            const { getByRole } = renderComponent(
                true,
                <header role="header" />,
                null
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper is function', () => {
            const { getByRole } = renderComponent(
                true,
                (children) => <header role="header">{children}</header>,
                null
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper is null', () => {
            const { getByText } = renderComponent(true, null, null);

            const children = getByText(childrenText);

            expect(children).toHaveTextContent(childrenText);
        });
    });

    describe('should return allow wrapper when condition false and ', () => {
        it('wrapper is string', () => {
            const { container } = renderComponent(false, 'div', 'div');
            const div = container.querySelector('div');

            expect(div).toHaveTextContent(childrenText);
        });

        it('wrapper is ReactNode', () => {
            const { getByRole } = renderComponent(
                false,
                'div',
                <header role="header" />
            );

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper is function', () => {
            const { getByRole } = renderComponent(false, 'div', (children) => (
                <header role="header">{children}</header>
            ));

            const header = getByRole('header');

            expect(header).toHaveTextContent(childrenText);
        });

        it('wrapper is null', () => {
            const { getByText } = renderComponent(false, null, null);

            const children = getByText(childrenText);

            expect(children).toHaveTextContent(childrenText);
        });
    });
});
