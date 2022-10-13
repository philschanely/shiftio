import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormField } from '../components';

export default {
  title: 'Example/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'FormField',
};