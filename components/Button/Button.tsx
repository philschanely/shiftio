
import type { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import type { StyledButtonColor } from './Button.styled';


export type ButtonProps = {
  children: ReactNode;
  color?: StyledButtonColor;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  color = 'neutral',
  onClick,
  type = 'button',
}) => (
  <StyledButton
    color={color}
    onClick={onClick}
    type={type}
  >
    {children}
  </StyledButton>
);