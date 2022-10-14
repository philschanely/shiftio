
import type { FunctionComponent, ReactNode } from 'react';
import { Alert } from '../Alert';
import { StyledFormField } from './FormField.styled';

export type FormFieldProps = {
  children: ReactNode;
  error?: string | false;
  label: string;
  labelFor: string;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  children,
  error = false,
  label,
  labelFor,
}) => {
  return (
    <StyledFormField>
      <label htmlFor={labelFor}>{label}</label>
      {children}
      {error && (
        <Alert severity="error">{error}</Alert>
      )}
    </StyledFormField>
  );
};