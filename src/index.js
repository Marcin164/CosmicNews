import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { createStore } from "redux";
import allReducers from "./Redux/index.js";
import { Provider } from "react-redux";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {console.log("SUBSCRIBED")});

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);