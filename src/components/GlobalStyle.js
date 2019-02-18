import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('../fonts/SF-Pro-Display-Regular.otf');
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url('../fonts/SF-Pro-Text-Regular.otf');
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

export default GlobalStyle;
