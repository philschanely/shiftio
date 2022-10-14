import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormField } from '../components';

export default {
  title: 'Example/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => <FormField {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'Text input',
  labelFor: 'text-input-demo',
  children: (
    <input
      name="text-input-demo"
      id="text-input-demo"
      type="text"
    />
  )
};

export const Select = Template.bind({});
Select.args = {
  label: 'Select',
  labelFor: 'text-select-demo',
  children: (
    <select name="text-select-demo" id="text-select-demo">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  )
};