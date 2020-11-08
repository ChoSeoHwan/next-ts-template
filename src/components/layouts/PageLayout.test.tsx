import React from 'react';
import PageLayout from 'components/layouts/PageLayout';

import render from 'libs/testUtils';

describe('Components | Layouts | <PageLayout />', () => {
    const renderComponent = () =>
        render(
            <PageLayout
                header={<div>header</div>}
                leftPanel={<div>left panel</div>}>
                children
            </PageLayout>
        );

    it('should pageLayout has header', () => {
        const { getByText } = renderComponent();

        expect(getByText('header')).toHaveTextContent('header');
    });

    it('should pageLayout has left panel', () => {
        const { getByText } = renderComponent();

        expect(getByText('left panel')).toHaveTextContent('left panel');
    });

    it('should pageLayout has children', () => {
        const { getByText } = renderComponent();

        expect(getByText('children')).toHaveTextContent('children');
    });
});
