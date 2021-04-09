import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer,
  applyMiddleware(thunk));
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
