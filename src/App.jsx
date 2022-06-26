import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

class App extends Component {
  constructor(data) {
    super(data);
    this.state = {
      msg: "This is my first component",
    };
  }
  render() {
    return (
      <div>
        <Home />
        {/* <Router>
          <Route exact path="/" element={<Home />} />
        </Router> */}
      </div>
    );
  }
}
export default App;
