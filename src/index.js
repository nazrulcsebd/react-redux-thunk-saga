import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { setupAxios } from "./utility-helper/utility";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/site-style.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import RootReducer from "./store/rootReducher";

const store = createStore(RootReducer, applyMiddleware(thunk));

setupAxios(axios, store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
