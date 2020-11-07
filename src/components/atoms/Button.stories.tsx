import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Button from 'components/atoms/Button';

export default {
    title: 'Components/Atoms/Button',
    component: Button
};

interface ButtonStoryProps {
    text: string;
}

export const ButtonStory: Story<ButtonStoryProps> = ({
    text
}: ButtonStoryProps) => {
    return <Button onClick={action('click')}>{text}</Button>;
};

ButtonStory.args = {
    text: 'text'
};

ButtonStory.storyName = 'Default';
