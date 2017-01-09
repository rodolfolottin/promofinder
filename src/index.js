import createLogger from 'redux-logger';
import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promoApp from './reducers/reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  promoApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
    )
);

let fnRender = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
};

fnRender();
