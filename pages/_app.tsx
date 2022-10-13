import type { AppProps } from 'next/app'
import styled from 'styled-components';
import { Functions, Tokens } from '../styles';

const { rem } = Functions;
const {
  TypeSpecs: {
    BODY,
    DISPLAY_1
  },
  Colors: {
    INDIGO_300,
    SLATE_100,
    SLATE_400,
    SLATE_500,
  }
} = Tokens;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
  padding: ${rem(24)};
  background-color: ${SLATE_100};
  color: ${SLATE_500}
`;

const StyledAppHeader = styled.header`
  h1 {
    ${DISPLAY_1};
    color: ${INDIGO_300};
    text-align: center;
  }
`;

const StyledAppFooter = styled.footer`
  p {
    ${BODY};
    color: ${SLATE_400};
    text-align: center;
  }
`;

const ShiftioApp = ({ Component, pageProps }: AppProps) => (
  <StyledApp>
    <StyledAppHeader>
      <h1>Shift.io</h1>
    </StyledAppHeader>
    <main>
      <Component {...pageProps} />
    </main>
    <StyledAppFooter>
      <p>Copyright &copy; 2022 by Phil Schanely. All rights reserved.</p>
    </StyledAppFooter>
  </StyledApp>
);

export default ShiftioApp;
