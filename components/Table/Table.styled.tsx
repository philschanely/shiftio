import styled from 'styled-components';
import { Functions, Tokens } from '../../styles';

const { rem } = Functions;
const {
  Colors: {
    SLATE_200,
    SLATE_400,
    SLATE_500,
  },
  TypeSpecs: {
    BODY,
    DISPLAY_5,
    DISPLAY_6,
  },
} = Tokens;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead th {
    ${DISPLAY_6}

    color: ${SLATE_400};
    border-bottom: ${rem(2)} solid ${SLATE_400};
    padding: ${rem(12)} ${rem(16)};
    text-align: left;
  }

  tbody {
    td {
      ${BODY}

      border-bottom: ${rem(1)} solid ${SLATE_200};
      color: ${SLATE_400};
      padding: ${rem(8)} ${rem(16)};
      text-align: left;
    }

    th {
      ${DISPLAY_5}

      border-bottom: ${rem(1)} solid ${SLATE_200};
      color: ${SLATE_500};
      padding: ${rem(8)} ${rem(16)};
      text-align: left;
    }
  }
`;