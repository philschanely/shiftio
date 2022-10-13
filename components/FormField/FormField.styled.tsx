import styled from 'styled-components';
import { Functions, Tokens } from '../../styles';

const { rem } = Functions;
const {
  Colors: {
    SLATE_50,
    SLATE_100,
    SLATE_200,
    SLATE_300,
    SLATE_400,
    SLATE_500,
  },
  TypeSpecs: {
    BODY,
    DISPLAY_6,
  },
} = Tokens;

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};

  label {
    ${DISPLAY_6}
  }

  input,
  select {
    ${BODY}

    display: flex;
    gap: ${rem(8)};
    border: ${rem(1)} solid ${SLATE_300};
    border-radius: ${rem(2)};
    background-color: ${SLATE_50};
    padding: ${rem(8)} ${rem(16)};
    color: ${SLATE_500};

    &:hover {
      border-color: ${SLATE_500};
    }

    &:focus {
      outline: ${rem(4)} solid ${SLATE_300};
    }

    &:disabled {
      border-color: ${SLATE_300};
      color: ${SLATE_300};
      background-color: ${SLATE_100};
    }
  }
`;

export const StyledFormFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;