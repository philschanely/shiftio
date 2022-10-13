
import type { FunctionComponent, ReactNode } from 'react';
import { Styled__Component__ } from './Component.styled';

export type __Component__Props = {
  children: ReactNode;
}

export const __Component__: FunctionComponent<__Component__Props> = ({
  children,
}) => {
  return (
    <Styled__Component__>
      {children}
    </Styled__Component__>
  );
};