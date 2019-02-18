import React, { Component } from 'react';
import ThemeWrapper from './components/ThemeWrapper.js';
import { H1 } from './components/Typography';

class App extends Component {
  render() {
    return (
      <ThemeWrapper>
        <H1>Another Todo App!</H1>
      </ThemeWrapper>
    );
  }
}

export default App;
