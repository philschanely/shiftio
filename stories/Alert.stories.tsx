import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '../components';

export default {
  title: 'Example/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Alert',
};