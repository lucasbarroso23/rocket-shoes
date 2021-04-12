import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GloblaStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GloblaStyle />
    </BrowserRouter>
  );
}

export default App;
