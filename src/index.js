import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import 'font-awesome/css/font-awesome.css'
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import history from "./history";
import configureStore from "./store";

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
