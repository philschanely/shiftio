import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components';

export default {
  title: 'Example/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  active: true,
  children: (
    <p>Modal content goes here</p>
  ),
  header: "Modal header",
  id: "demo-modal",
};