import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes.js';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={themes.main}>{children}</ThemeProvider>
);

export default ThemeWrapper;
