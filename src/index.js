import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css';
import App from "./Components/App";
import { createStore } from "redux";
import rootreducers from "./Reducers";
import { Provider } from "react-redux";

const store=createStore(rootreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
