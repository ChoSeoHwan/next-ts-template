import React from 'react';
import { Story } from '@storybook/react';

import Link from 'components/atoms/Link';

export default {
    title: 'Components/Atoms/Link',
    desc: 'test',
    component: Link,
    parameters: {
        docs: {
            description: {
                component: '기본 링크 상속, 커스텀 가능한 Link 컴포넌트'
            }
        }
    }
};

export const DefaultLink: Story = () => <Link href="">Link</Link>;

DefaultLink.storyName = 'Default';
