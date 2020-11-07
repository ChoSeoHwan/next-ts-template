import React, { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const ButtonWrap = styled.button(`
    border:1px solid #dadce0;
`);

enum ButtonType {
    PRIMARY
}

interface Button {
    type?: ButtonType;
}

const Button: FC<Button> = ({
    children,
    type = ButtonType.PRIMARY
}: PropsWithChildren<Button>) => {
    return <ButtonWrap>{children}</ButtonWrap>;
};

export default Button;
