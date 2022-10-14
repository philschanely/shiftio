import type { FunctionComponent } from 'react';
import { Alert, Button, Table } from '../../components';
import { useShifts } from '../../providers';

export type ShiftTableProps = {
  handleAssignNurse: (id?: Number) => void,
}

export const ShiftTable: FunctionComponent<ShiftTableProps> = ({ handleAssignNurse }) => {
  const { shifts, shiftsLoading, shiftError } = useShifts();

  if (shiftsLoading) {
    return <p>Loading...</p>;
  }

  if (shiftError) {
    return (
      <Alert severity="error">
        Something unexpected happened... please refresh the page or contact support!
      </Alert>
    );
  }

  return shifts && (
    <>
      <Button color="primary" onClick={() => handleAssignNurse()}>
        Set shift assignment
      </Button>
      <Table
        headers={[
          'Shift',
          'Start',
          'End',
          'Qualification',
          'Assignee',
        ]}
        items={shifts.map(({
          end,
          id,
          nurse,
          qualification,
          shift,
          start,
        }) => ({
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
    </>
  );
};