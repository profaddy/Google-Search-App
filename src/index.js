import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./js/store";

import Home from "./js/Components/Home/home";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
