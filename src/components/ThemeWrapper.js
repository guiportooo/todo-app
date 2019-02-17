import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../themes/themes.js';
import GlobalStyle from './GlobalStyle.js';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={themes.main}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default ThemeWrapper;
