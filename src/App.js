import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Main from "./components/mainPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/"  exact component={Login}></Route>
            <Route exact path="/main"  exact component={Main}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
