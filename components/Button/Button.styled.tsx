import styled from 'styled-components';
import { Functions, Tokens } from '../../styles';

const { rem } = Functions;
const {
  Colors: {
    FANDANGO_300,
    FANDANGO_400,
    SLATE_300,
    SLATE_400,
    TEAL_300,
    TEAL_400,
  },
  TypeSpecs: { DISPLAY_5 },
} = Tokens;

export type StyledButtonColor = 'primary' | 'danger' | 'neutral';

const styledButtonBackgroundColor = ({ color }: { color: StyledButtonColor }) => {
  switch (color) {
    case 'primary':
      return TEAL_300;
    case 'danger':
      return FANDANGO_300;
    case 'neutral':
    default:
      return SLATE_300;
  }
};

const styledButtonFocusColor = ({ color }: { color: StyledButtonColor }) => {
  switch (color) {
    case 'primary':
      return TEAL_400;
    case 'danger':
      return FANDANGO_400;
    case 'neutral':
    default:
      return SLATE_400;
  }
};

const styledButtonHoverBackgroundColor = ({ color }: { color: StyledButtonColor }) => {
  switch (color) {
    case 'primary':
      return TEAL_400;
    case 'danger':
      return FANDANGO_400;
    case 'neutral':
    default:
      return SLATE_400;
  }
};

export const StyledButton = styled.button`
  --button-background-color: ${styledButtonBackgroundColor};
  --button-background-color: ${styledButtonBackgroundColor};

  ${DISPLAY_5}

  background-color: var(--button-background-color);
  border: 0;
  border-radius: ${rem(2)};
  padding: ${rem(8)} ${rem(24)};
  display: inline-flex;
  gap: ${rem(8)};
  color: white;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus {
    --button-background-color: ${styledButtonBackgroundColor};
    
    outline: ${rem(4)} solid ${styledButtonFocusColor}
  }

  &:hover {
    --button-background-color: ${styledButtonHoverBackgroundColor};
  }
`;