import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <div className=".bg-light min-vh-100">
    <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
