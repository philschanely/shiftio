import type { FunctionComponent, MouseEventHandler } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, FormField, FormFieldGroup, Modal } from '../../components';
import { Nurse, Shift } from '../../types';

export type ShiftAssignmentModalProps = {
  active: boolean;
  activeNurse: Nurse | null;
  activeShift: Shift | null;
  onClose: () => void;
  onDismiss: () => void;
  saveAssignment: ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => Promise<boolean>;
  shifts: Shift[] | null;
  nurses: Nurse[] | null;
  validateAssignment: ({ nurseId, shiftId }: { nurseId: number, shiftId: number }) => string | boolean;
}

export const ShiftAssignmentModal: FunctionComponent<ShiftAssignmentModalProps> = ({
  active,
  activeNurse,
  activeShift,
  onClose,
  onDismiss,
  nurses,
  shifts,
  saveAssignment,
  validateAssignment,
}) => active ? (
  <Formik
    initialValues={{
      nurse: activeNurse?.id.toString() || '',
      shift: activeShift?.id.toString() || '',
    }}
    onSubmit={async (values) => {
      const { nurse, shift } = values;
      await saveAssignment({
        nurseId: Number(nurse),
        shiftId: Number(shift),
      });
      onClose();
    }}
    validate={(values) => {
      const { nurse, shift } = values;
      let errors = {};

      if (nurse && shift) {
        errors = validateAssignment({
          nurseId: Number(nurse),
          shiftId: Number(shift),
        });
      }

      console.log(errors);

      return errors;
    }}
    // validationSchema={Yup.object().shape({
    //   shift: Yup.number()
    //     .required('Must select a shift'),
    //   nurse: Yup.number()
    //     .required('Must select a nurse'),
    // })}
  >
    {props => (
      <form onSubmit={props.handleSubmit}>
        <Modal
          active={active}
          footer={(
            <>
              <Button
                disabled={!props.dirty || !props.isValid}
                onClick={() => console.log('click')}
                type="submit"
                color="primary"
              >
                Save assignment
              </Button>
              <Button onClick={onClose} color="neutral">
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
            <FormField
              error={props.errors.shift}
              labelFor="shift"
              label="Shift"
            >
              <select
                id="shift"
                name="shift"
                onChange={props.handleChange}
                value={props.values.shift}
              >
                <option value="">-- Select a shift --</option>
                {shifts?.map(({ id, name, start, end, qualification }) => (
                  <option key={id.toString()} value={id.toString()}>
                    {name} {start}—{end}, ({qualification})
                  </option>
                ))}
              </select>
            </FormField>
            <FormField
              error={props.errors.nurse}
              labelFor="nurse"
              label="Nurse"
            >
              <select
                id="nurse"
                name="nurse"
                onChange={props.handleChange}
                value={props.values.nurse}
                disabled={!props.values.shift}
              >
                <option value="">-- Select a qualified nurse --</option>
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
