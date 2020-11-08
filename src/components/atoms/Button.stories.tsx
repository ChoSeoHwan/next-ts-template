import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import styled from 'libs/styled';

import Button, { ButtonProps, ButtonType } from 'components/atoms/Button';

export default {
    title: 'Components/Atoms/Button',
    desc: 'test',
    component: Button,
    argTypes: {
        text: { control: { type: 'text' } },
        type: {
            control: {
                type: 'select',
                options: Object.keys(ButtonType).filter((theme) =>
                    isNaN(Number(theme))
                )
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: '기본 버튼 컴포넌트'
            }
        }
    }
};

interface ButtonStoryProps {
    text: string;
    type: string;
}

export const DefaultButton: Story<ButtonStoryProps> = ({
    text,
    type
}: ButtonStoryProps) => {
    return (
        <Button type={ButtonType[type]} onClick={action('click')}>
            {text}
        </Button>
    );
};

DefaultButton.args = {
    text: 'text',
    type: ButtonType[0]
};

DefaultButton.storyName = 'Default';

const IconButtonStyled = styled(Button)<ButtonProps>`
    width: 32px;
    height: 32px;
`;

export const IconButton: Story = () => (
    <IconButtonStyled type={ButtonType.ICON} onClick={action('click')}>
        &lt;
    </IconButtonStyled>
);

IconButton.argTypes = {
    text: {
        table: {
            disable: true
        }
    },
    type: {
        table: {
            disable: true
        }
    }
};

IconButton.parameters = {
    docs: {
        description: {
            story: '아이콘 버튼'
        }
    }
};
