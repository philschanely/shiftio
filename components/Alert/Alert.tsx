
import type { FunctionComponent, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { StyledAlert,  } from './Alert.styled';
import type { StyledAlertSeverity } from './Alert.styled';

export type AlertProps = {
  children: ReactNode;
  severity?: StyledAlertSeverity;
}

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  severity = 'info',
}) => (
  <StyledAlert severity={severity}>
    <FontAwesomeIcon
      icon={severity === 'error' ? faExclamationTriangle : faInfoCircle}
      width="16px"
    />
    <p>{children}</p>
  </StyledAlert>
);