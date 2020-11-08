import React, { FC, PropsWithChildren, ReactElement } from 'react';

import styled from 'libs/styled';

const HeaderContainer = styled.div`
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: stretch;

    height: ${({ theme }) => theme.size.headerHeight};
`;

const BodyContainer = styled.div`
    position: relative;
    top: ${({ theme }) => theme.size.headerHeight};
    z-index: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    min-height: calc(100vh - ${({ theme }) => theme.size.headerHeight});
`;

const LeftPanelContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    flex-grow: 0;

    width: ${({ theme }) => theme.size.leftPanelWidth};
    min-height: inherit;
`;

const LeftPanelScrollContainer = styled.div`
    position: fixed;

    display: flex;
    width: inherit;
    height: 0;
    min-height: inherit;
    max-height: 0;

    overflow-y: scroll;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
`;

interface PageLayoutProps {
    header: ReactElement;
    leftPanel: ReactElement;
}

const PageLayout: FC<PageLayoutProps> = ({
    header,
    leftPanel,
    children
}: PropsWithChildren<PageLayoutProps>) => {
    return (
        <div>
            <HeaderContainer>{header}</HeaderContainer>

            <BodyContainer>
                <LeftPanelContainer>
                    <LeftPanelScrollContainer>
                        {leftPanel}
                    </LeftPanelScrollContainer>
                </LeftPanelContainer>

                <ContentContainer>{children}</ContentContainer>
            </BodyContainer>
        </div>
    );
};

export default PageLayout;
