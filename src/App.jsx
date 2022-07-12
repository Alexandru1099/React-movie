import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Recomandation from "./pages/Recomandation";

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
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/recomandation" exact>
              <Recomandation />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
