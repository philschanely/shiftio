import styled from 'styled-components';
import { Functions, Tokens } from '../../styles';

const { rem } = Functions;
const {
  Colors: {
    SLATE_50,
    SLATE_500,
  },
  TypeSpecs: {
    BODY,
    DISPLAY_3,
  },
} = Tokens;

export const StyledModal = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  align-items: center;

  dialog {
    ${BODY}

    z-index: 2;
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    width: 100%;
    max-width: ${rem(560)};
    border: 0;
    padding: ${rem(24)};
    display: flex;
    flex-direction: column;
    gap: ${rem(32)};
    color: ${SLATE_500};
    background-color: ${SLATE_50};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: ${rem(16)};
  }

  h1 {
    ${DISPLAY_3}
    color: ${SLATE_500};
    margin: 0;
  }

  footer {
    display: flex;
    justify-content: space-between;
    gap: ${rem(16)};
  }
`;

export const StyleModalScreen = styled.button`
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(${rem(10)});
  z-index: 1;
`;