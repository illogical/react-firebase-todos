import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import { Provider } from "react-redux";

const redux = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={redux}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
