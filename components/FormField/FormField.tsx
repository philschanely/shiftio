
import type { FunctionComponent, ReactNode } from 'react';
import { StyledFormField } from './FormField.styled';

export type FormFieldProps = {
  children: ReactNode;
  label: string;
  labelFor: string;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  children,
  label,
  labelFor,
}) => {
  return (
    <StyledFormField>
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </StyledFormField>
  );
};