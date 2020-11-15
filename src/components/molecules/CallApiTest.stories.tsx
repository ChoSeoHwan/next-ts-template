import React from 'react';
import { Story } from '@storybook/react';

import CallApiTest from 'components/molecules/CallApiTest';

export default {
    title: 'Components/Molecule/CallApiTest',
    component: CallApiTest,
    parameters: {
        docs: {
            description: 'api 테스트를 위한 컴포넌트'
        }
    }
};

export const DefaultCallApiTest: Story = () => <CallApiTest />;

DefaultCallApiTest.storyName = 'Default';
