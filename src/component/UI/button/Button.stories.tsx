import { Meta, StoryFn } from '@storybook/react';

import Button from '.';

export default {
   title: 'UI/Button',
   component: Button,
   args: {},
   argTypes: {}
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
   children: 'Button',
   disabled: false
};

Outlined.argTypes = {
   variant: {
      control: 'inline-radio',
      options: ['contained', 'login', 'next', 'outlined', 'register', 'text', 'begin', 'come']
   }
};
