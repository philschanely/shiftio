
import type { FunctionComponent, ReactNode } from 'react';
import { StyledFormFieldGroup } from './FormField.styled';

export type FormFieldGroupProps = {
  children: ReactNode;
}

export const FormFieldGroup: FunctionComponent<FormFieldGroupProps> = ({
  children,
}) => {
  return (
    <StyledFormFieldGroup>
      {children}
    </StyledFormFieldGroup>
  );
};