import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../components';

export default {
  title: 'Example/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  headers: [
    'Name',
    'Email',
    'Phone',
  ],
  items: [
    {
      id: '1',
      data: {
        name: 'Frodo Baggins',
        email: 'frodo@example.com',
        phone: '555-444-3331',
      }
    },
    {
      id: '2',
      data: {
        name: 'Samwise Gamgee',
        email: 'sam@example.com',
        phone: '555-444-3332',
      }
    },
    {
      id: '3',
      data: {
        name: 'Peregrin Took',
        email: 'pippin@example.com',
        phone: '555-444-3333',
      }
    },
    {
      id: '3',
      data: {
        name: 'Meriadoc Brandybuck',
        email: 'merry@example.com',
        phone: '555-444-3334',
      }
    }
  ]
};