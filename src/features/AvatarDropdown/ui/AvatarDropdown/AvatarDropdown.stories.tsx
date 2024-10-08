import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({}),
];
