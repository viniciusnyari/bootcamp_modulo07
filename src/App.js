import React from 'react';
/*
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
*/
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

/** Esse history não funcionou muito bem, mas segue o baile,
 * era só para direcionar para a tela de cart mesmo
 * <BrowserRouter history={history}>
 * */
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
