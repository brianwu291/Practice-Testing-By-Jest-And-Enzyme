import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

export const Root = ({ children, initState = {} }) => {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(reduxPromise)
  );
  return(
    // props.initState 為了撰寫測試，參數解構賦值以便設定初始值
    <Provider
      store={store}>
      {children}
    </Provider>
  );
};
