import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { Suspense } from 'react';

import { ArticleDetailsComments } from './ArticleDetailsComments';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <Suspense fallback={<div>Loading comments...</div>}>
        <ArticleDetailsComments {...args} />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetailsPage: {
    },
})];
