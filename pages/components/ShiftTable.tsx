import type { FunctionComponent, MouseEventHandler } from 'react';
import { Shift } from '../../types';
import { Button, Table } from '../../components';

export type ShiftTableProps = {
  handleAssignNurse: (id: Number) => void,
  shifts: Shift[],
}

export const ShiftTable: FunctionComponent<ShiftTableProps> = ({ handleAssignNurse, shifts }) => {

  return (
    <Table
      headers={[
        'Shift',
        'Start',
        'End',
        'Qualification',
        'Assignee',
      ]}
      items={shifts.map(({ id, shift, start, end, qualification, nurse }) => ({
        id,
        data: {
          shift,
          start,
          end,
          qualification,
          nurse: nurse?.displayName || (
            <Button onClick={() => handleAssignNurse(id)}>Assign</Button>
          ),
        }
      }))}
    />
  );
};