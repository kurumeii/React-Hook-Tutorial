import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import TodoApp from "./Components/TodoApp.js";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Store/Reducers'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
