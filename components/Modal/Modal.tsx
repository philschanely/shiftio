
import type { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { StyledModal, StyleModalScreen } from './Modal.styled';

export type ModalProps = {
  active: boolean;
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  id: string;
  onClose: MouseEventHandler,
  onDismiss: MouseEventHandler,
}

export const Modal: FunctionComponent<ModalProps> = ({
  active,
  children,
  footer,
  header,
  id,
  onClose,
  onDismiss,
}) => {
  return active ? (
    <StyledModal>
      <dialog
        open={active}
        role="dialog"
        id={id}
        aria-labelledby={`dialog-${id}-label`}
        aria-modal="true"
      >
        {header && (
          <header>
            <h1 id={`dialog-${id}-label`}>{header}</h1>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={onClose}
              width="16px"
            />
          </header>
        )}
        {children}
        {footer && (
          <footer>
            {footer}
          </footer>
        )}
      </dialog>
      <StyleModalScreen onClick={onDismiss} />
    </StyledModal>
  ) : <></>;
};