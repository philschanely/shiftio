import styled from 'styled-components';
import { Functions, Tokens } from '../../styles';

const { rem } = Functions;
const {
  Colors: {
    FANDANGO_100,
    FANDANGO_300,
    FANDANGO_500,
    INDIGO_100,
    INDIGO_300,
    INDIGO_500,
  },
  TypeSpecs: {
    BODY,
  },
} = Tokens;

export type StyledAlertSeverity = 'error' | 'info';

const alertBackgroundColor = ({ severity }: { severity: StyledAlertSeverity }) => {
  switch (severity) {
    case 'error':
      return FANDANGO_100;
    case 'info':
    default:
      return INDIGO_100;
  }
}
const alertIconColor = ({ severity }: { severity: StyledAlertSeverity }) => {
  switch (severity) {
    case 'error':
      return FANDANGO_300;
    case 'info':
    default:
      return INDIGO_300;
  }
}
const alertTextColor = ({ severity }: { severity: StyledAlertSeverity }) => {
  switch (severity) {
    case 'error':
      return FANDANGO_500;
    case 'info':
    default:
      return INDIGO_500;
  }
}

export const StyledAlert = styled.div`
  --alert-background-color: ${alertBackgroundColor};
  --alert-icon-color: ${alertIconColor};
  --alert-text-color: ${alertTextColor};

  border-radius: ${rem(2)};
  border: 0;
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  padding: ${rem(8)} ${rem(16)};
  background-color: var(--alert-background-color);
  color: var(--alert-icon-color);

  > p {
    ${BODY}

    margin: 0;
    color: var(--alert-text-color);
  }
`;