import { createGlobalStyle } from 'styled-components';
import InterRegular from '/src/fonts/inter-v13-cyrillic_latin-regular.woff2';
import Inter700 from '/src/fonts/inter-v13-cyrillic_latin-700.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url(${Inter700}) format('woff2');
  }

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  };
`;
