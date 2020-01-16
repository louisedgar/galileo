import React, { Component } from "react";
import "./App.css";
import Nav from "./pages/Nav.js";
import Dashboard from "./pages/Dashboard.js";
import Soal from "./pages/Soal.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/soal" component={Soal} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
