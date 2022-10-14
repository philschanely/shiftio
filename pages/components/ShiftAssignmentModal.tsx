import type { FunctionComponent, MouseEventHandler } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, FormField, FormFieldGroup, Modal } from '../../components';
import { Nurse, Shift } from '../../types';

export type ShiftAssignmentModalProps = {
  active: boolean;
  activeNurse: Nurse | null;
  activeShift: Shift | null;
  onClose: MouseEventHandler;
  onDismiss: MouseEventHandler;
  shifts: Shift[] | null;
  nurses: Nurse[] | null;
}

export const ShiftAssignmentModal: FunctionComponent<ShiftAssignmentModalProps> = ({
  active,
  activeNurse,
  activeShift,
  onClose,
  onDismiss,
  nurses,
  shifts,
}) => {
  console.log('rendered', activeShift?.id.toString());

  return active ? (
    <Formik
      initialValues={{
        nurse: activeNurse?.id.toString() || '',
        shift: activeShift?.id.toString() || '',
      }}
      onSubmit={async (values) => {
        // TBD
      }}
      validationSchema={Yup.object().shape({
        shift: Yup.number()
          .required('Must select a shift'),
        nurse: Yup.number()
          .required('Must select a nurse'),
      })}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
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
            <FormFieldGroup>
              <FormField labelFor="shift" label="Shift">
                <select
                  id="shift"
                  name="shift"
                  onChange={props.handleChange}
                  value={props.values.shift}
                >
                  {shifts?.map(({ id, name, start, end, qualification }) => (
                    <option key={id.toString()} value={id.toString()}>
                      {name} {start}—{end}, ({qualification})
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField labelFor="nurse" label="Nurse">
                <select
                  id="nurse"
                  name="nurse"
                  onChange={props.handleChange}
                  value={props.values.nurse}
                >
                  {nurses?.map(({ id, displayName }) => (
                    <option key={id.toString()} value={id.toString()}>{displayName}</option>
                  ))}
                </select>
              </FormField>
            </FormFieldGroup>
          </Modal>
        </form>
      )}
    </Formik>
  ) : <></>;
};
