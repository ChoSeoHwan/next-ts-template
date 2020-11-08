import React from 'react';
import { Story } from '@storybook/react';

import styled from 'libs/styled';

import PageLayout from 'components/layouts/PageLayout';

export default {
    title: 'Layouts/PageLayout',
    component: PageLayout,
    parameters: {
        layout: 'fullscreen',
        docs: {
            inlineStories: false,
            iframeHeight: 500,
            description: {
                component: '기본 페이지 레이아웃'
            }
        }
    },
    argTypes: {
        header: {
            description: 'header component'
        },
        leftPanel: {
            description: 'left panel component'
        }
    }
};

export const DefaultPageLayout: Story = () => (
    <PageLayout header={<div>header</div>} leftPanel={<div>left panel</div>}>
        body
    </PageLayout>
);

DefaultPageLayout.storyName = 'Default';

interface PageLayoutChildrenProps {
    color: string;
}

const HeaderStyle = styled.div<PageLayoutChildrenProps>`
    background: ${({ color }) => color};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 8px;
`;

const LeftPanelStyle = styled.div<PageLayoutChildrenProps>`
    background: ${({ color }) => color};

    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    height: 800px;
    padding: 8px;
`;

const BodyStyle = styled.div<PageLayoutChildrenProps>`
    background: ${({ color }) => color};

    height: 100%;
`;

interface ExamplePageLayoutProps {
    headerColor: string;
    leftPanelColor: string;
    bodyColor: string;
}

export const ExamplePageLayout: Story<ExamplePageLayoutProps> = ({
    headerColor,
    bodyColor,
    leftPanelColor
}: ExamplePageLayoutProps) => (
    <PageLayout
        header={<HeaderStyle color={headerColor}>HEADER</HeaderStyle>}
        leftPanel={
            <LeftPanelStyle color={leftPanelColor}>LEFT PANEL</LeftPanelStyle>
        }>
        <BodyStyle color={bodyColor}>BODY</BodyStyle>
    </PageLayout>
);

ExamplePageLayout.argTypes = {
    headerColor: {
        control: { type: 'color' }
    },
    leftPanelColor: {
        control: { type: 'color' }
    },
    bodyColor: {
        control: { type: 'color' }
    },
    header: {
        table: {
            disable: true
        }
    },
    leftPanel: {
        table: {
            disable: true
        }
    }
};

ExamplePageLayout.args = {
    headerColor: '#ff0000',
    leftPanelColor: '#00ff00',
    bodyColor: '#0000ff'
};

ExamplePageLayout.storyName = 'Example';
