import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';

import GloblaStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GloblaStyle />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
