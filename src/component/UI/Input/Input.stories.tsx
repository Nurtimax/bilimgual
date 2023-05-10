import { StoryFn, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';

export default {
   title: 'UI/Input',
   component: Input,
   args: {},
   argTypes: {
      onChange: { type: 'string' }
   }
} as Meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} onChange={(e) => action('Input')(e.target.value)} />;

export const Outlined = Template.bind({});

Outlined.args = {
   label: 'Outlined',
   fullWidth: false,
   error: false,
   disabled: false
};

Outlined.argTypes = {
   variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'standard']
   }
};
