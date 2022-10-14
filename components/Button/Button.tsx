
import type { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import type { StyledButtonColor } from './Button.styled';


export type ButtonProps = {
  children: ReactNode;
  color?: StyledButtonColor;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  color = 'neutral',
  disabled = false,
  onClick,
  type = 'button',
}) => (
  <StyledButton
    color={color}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </StyledButton>
);