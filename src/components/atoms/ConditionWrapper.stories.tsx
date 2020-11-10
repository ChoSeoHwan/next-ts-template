import React from 'react';
import { Story } from '@storybook/react';

import ConditionWrapper from 'components/atoms/ConditionWrapper';

export default {
    title: 'Components/Atoms/ConditionWrapper',
    component: ConditionWrapper,
    parameters: {
        docs: {
            description: {
                component: '조건에 따른 wrapper 변경'
            }
        }
    },
    argTypes: {
        condition: {
            description: '조건',
            control: {
                type: 'boolean'
            }
        },
        wrapper: {
            description: '조건이 참일 때 감쌀 wrapper component'
        },
        denyWrapper: {
            description: '조건이 거짓일 때 감쌀 wrapper component'
        }
    }
};

export const DefaultConditionWrapper: Story = () => (
    <ConditionWrapper
        condition={true}
        wrapper={<h1>wrapper</h1>}
        denyWrapper={<h1>denyWrapper</h1>}>
        children
    </ConditionWrapper>
);

DefaultConditionWrapper.storyName = 'Default';

interface ExampleConditionWrapperProps {
    condition: boolean;
    wrapperText: string;
    denyWrapperText: string;
    childrenText: string;
}

export const ExampleConditionWrapper: Story<ExampleConditionWrapperProps> = ({
    condition,
    wrapperText,
    denyWrapperText,
    childrenText
}: ExampleConditionWrapperProps) => (
    <ConditionWrapper
        condition={condition}
        wrapper={(children) => (
            <h1>
                {wrapperText}
                <br />
                {children}
                <br />
                {wrapperText}
            </h1>
        )}
        denyWrapper={(children) => (
            <h1>
                {denyWrapperText}
                <br />
                {children}
                <br />
                {denyWrapperText}
            </h1>
        )}>
        <span>{childrenText}</span>
    </ConditionWrapper>
);

ExampleConditionWrapper.argTypes = {
    wrapperText: {
        control: {
            type: 'text'
        }
    },
    denyWrapperText: {
        control: {
            type: 'text'
        }
    },
    childrenText: {
        control: {
            type: 'text'
        }
    },
    wrapper: {
        table: {
            disable: true
        }
    },
    denyWrapper: {
        table: {
            disable: true
        }
    }
};

ExampleConditionWrapper.args = {
    condition: true,
    wrapperText: 'wrapper',
    denyWrapperText: 'deny wrapper',
    childrenText: 'children'
};

ExampleConditionWrapper.storyName = 'Example';
