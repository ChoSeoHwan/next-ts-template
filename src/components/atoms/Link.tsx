import React, { FC, HTMLAttributes } from 'react';
import BaseLink, { LinkProps as BaseLinkProps } from 'next/link';

import styled from 'libs/styled';

const Anchor = styled.a`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

interface LinkProps extends BaseLinkProps, HTMLAttributes<HTMLAnchorElement> {}

const Link: FC<LinkProps> = ({
    children,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    ...anchorProps
}: LinkProps) => (
    <BaseLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}>
        <Anchor {...anchorProps}>{children}</Anchor>
    </BaseLink>
);

export default Link;
