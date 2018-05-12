import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import promoApp from './reducers/reducers';

// Assets
require('../public/favicon.ico');

const loggerMiddleware = createLogger();

const store = createStore(
  promoApp,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

let fnRender = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

fnRender();
