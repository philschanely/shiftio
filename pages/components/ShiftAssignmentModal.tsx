import type { FunctionComponent, MouseEventHandler } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormField, FormFieldGroup, Modal } from '../../components';
import { Nurse, Shift } from '../../types';

export type ShiftAssignmentModalProps = {
  active: boolean;
  onClose: MouseEventHandler;
  onDismiss: MouseEventHandler;
  shifts: Shift[];
  nurses: Nurse[];
}

export const ShiftAssignmentModal: FunctionComponent<ShiftAssignmentModalProps> = ({
  active,
  onClose,
  onDismiss,
  nurses,
  shifts,
}) => {
  const formik = useFormik({
    initialValues: {
      name: 'Phil',
      shift: null,
      nurse: null,
    },
    onSubmit: async (values) => {
      // TBD
    },
    validationSchema: Yup.object().shape({
      name: Yup.string(),
      shift: Yup.number()
        .required('Must select a shift'),
      nurse: Yup.number()
        .required('Must select a nurse'),
    }),
  });

  return (
    <Modal
      active={active}
      footer={(
        <>
          <Button type="submit" color="primary">
            Save assignment
          </Button>
          <Button color="neutral">
            Cancel
          </Button>
        </>
      )}
      header="Set Shift Assignment"
      id="shift-assignments-modal"
      onClose={onClose}
      onDismiss={onDismiss}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormFieldGroup>
          <FormField labelFor="shift" label="Shift">
            <select
              id="shift"
              name="shift"
              onChange={formik.handleChange}
              // value={formik.values.nurse}
            >
              {shifts.map(({ id, name, start, end, qualification }) => (
                <option value={id.toString()}>{name} {start}—{end}, ({qualification})</option>
              ))}
            </select>
          </FormField>
          <FormField labelFor="nurse" label="Nurse">
            <select
              id="nurse"
              name="nurse"
              onChange={formik.handleChange}
              // value={formik.values.nurse}
            >
              {nurses.map(({ id, displayName }) => (
                <option value={id.toString()}>{displayName}</option>
              ))}
            </select>
          </FormField>
        </FormFieldGroup>
      </form>
    </Modal>
  );
}