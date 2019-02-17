import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url('../fonts/SF-Pro-Display-Regular.otf');
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('../fonts/SF-Pro-Text-Regular.otf');
  }
`;

export default GlobalStyle;
