import { Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';

export default {
   title: 'UI/Typography',
   component: Typography,
   args: {},
   argTypes: {}
} as Meta;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
   children: 'Maksatbeknurtilek'
};

Outlined.argTypes = {
   variant: {
      control: 'inline-radio',
      options: [
         'body1',
         'body2',
         'body3',
         'body4',
         'bodySmall',
         'bold',
         'button',
         'caption',
         'h1',
         'h2',
         'h3',
         'h4',
         'h5',
         'h6',
         'inherit',
         'medium',
         'overline',
         'regular',
         'subtitle1',
         'subtitle2'
      ]
   }
};
