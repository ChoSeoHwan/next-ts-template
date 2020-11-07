import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const ButtonWrap = styled.button(`
    border:1px solid #dadce0;
`);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({
    children,
    ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
    return <ButtonWrap {...buttonProps}>{children}</ButtonWrap>;
};

export default Button;
