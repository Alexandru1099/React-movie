import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SelectMoviePage from "./pages/SelectedMoviePage";
import RecomandationPage from "./pages/RecomandationPage";
import { Provider } from "react-redux";
import store from "./store/state";

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
              <HomePage />
            </Route>
            <Route path="/movie/:id" exact>
              <SelectMoviePage />
            </Route>
            <Route path="/signin" exact>
              <SignInPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route>
            <Route path="/recomandation" exact>
              <RecomandationPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
