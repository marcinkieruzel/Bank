import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider, useSelector } from 'react-redux';
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import Bank from './components/Bank';
import CustomerList from './components/CustomersList';

const store = createStore(reducers, applyMiddleware(logger));

const App = () => {

  const test = useSelector(state => state.test)
  console.warn(test);

  return <div className="container">
    <Bank />
    <CustomerList />
  </div>
}

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app"));
