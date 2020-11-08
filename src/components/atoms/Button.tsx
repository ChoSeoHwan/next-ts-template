import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { css } from '@emotion/core';

import styled from 'libs/styled';

export enum ButtonType {
    OUTLINE,
    ICON
}

interface ButtonStyledProps {
    styleType: ButtonType;
}

// 외각선 버튼
const OutLineButton = (theme) => css`
    border: 1px solid #dadce0;
    padding: 8px 10px;
    transition: background-color 0.3s;
    border-radius: 4px;

    &:hover {
        background-color: ${theme.colors.hoverBackground};
    }
`;

// 아이콘 버튼
const IconButton = (theme) => css`
    border: none;
    border-radius: 50%;
    padding: 4px;

    &:hover {
        background-color: ${theme.colors.hoverBackground};
    }
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
    color: ${({ theme }) => theme.colors.primaryText};
    ${({ styleType, theme }) => {
        switch (styleType) {
            case ButtonType.ICON:
                return IconButton(theme);

            case ButtonType.OUTLINE:
            default:
                return OutLineButton(theme);
        }
    }};
`;

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
    children,
    type = ButtonType.OUTLINE,
    ...buttonProps
}: PropsWithChildren<ButtonProps>) => (
    <ButtonStyled styleType={type} type="button" {...buttonProps}>
        {children}
    </ButtonStyled>
);

export default Button;
