import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ["text", "outlined", "contained", undefined],
      control: { type: 'select' }
    },
    color: {
      options: ["inherit", "primary", "secondary", "default", undefined],
      control: { type: 'select' }
    },
  },
} as ComponentMeta<typeof Button>;

export const Showcase = ((args: any) => (
  <Grid container direction="column" spacing={2}>
    <Grid container item direction="row" spacing={2}>
      <Grid item><Button variant="contained" color="primary">Button</Button></Grid>
      <Grid item><Button variant="text" color="secondary">Button</Button></Grid>
      <Grid item><Button variant="outlined" color="secondary">Button</Button></Grid>
    </Grid>
  </Grid>
)).bind({});

// const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>Button</Button>;

// Primary.args = {
//   variant: 'contained',
//   color: 'primary'
//   // label: 'Button',
// } as ButtonProps;

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
