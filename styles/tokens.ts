import { css } from 'styled-components';
import { Functions } from '.';

const { rem } = Functions;

export const Colors = {
  SLATE_50: '#F3F2F5',
  SLATE_100: '#E7E6EB',
  SLATE_200: '#C7C4D0',
  SLATE_300: '#837D95',
  SLATE_400: '#514B63',
  SLATE_500: '#14111E',
  INDIGO_100: '#CDC3EA',
  INDIGO_200: '#9D86DC',
  INDIGO_300: '#6335E6',
  INDIGO_400: '#3D2581',
  INDIGO_500: '#211A39',
  FANDANGO_100: '#F3C4D5',
  FANDANGO_200: '#F781AC',
  FANDANGO_300: '#FE0D64',
  FANDANGO_400: '#B4114C',
  FANDANGO_500: '#5A142E',
  TEAL_100: '#CBEFED',
  TEAL_200: '#86E3DD',
  TEAL_300: '#07B6AB',
  TEAL_400: '#1A726C',
  TEAL_500: '#16413E',
};

export const Fonts = {
  BASE: `'Lato', sans-serif`,
};

export const TypeSpecs = {
  BODY: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(16)};
    font-weight: 300;
    line-height: ${rem(24)};
  `,
  DISPLAY_1: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(48)};
    font-weight: 600;
    line-height: ${rem(64)};
    letter-spacing: ${rem(4)};
    text-transform: uppercase;
  `,
  DISPLAY_2: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(36)};
    font-weight: 600;
    line-height: ${rem(48)};
  `,
  DISPLAY_3: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(24)};
    font-weight: 600;
    line-height: ${rem(32)};
  `,
  DISPLAY_4: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(20)};
    font-weight: 600;
    line-height: ${rem(24)};
  `,
  DISPLAY_5: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(16)};
    font-weight: 600;
    line-height: ${rem(24)};
  `,
  DISPLAY_6: css`
    font-family: ${Fonts.BASE};
    font-size: ${rem(12)};
    font-weight: 600;
    line-height: ${rem(16)};
    letter-spacing: ${rem(1.5)};
    text-transform: uppercase;
  `,
};