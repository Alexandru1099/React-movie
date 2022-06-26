import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import { BrowserRouter as Route, Routes, Router, Link } from "react-router-dom";

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
        {/* <Routes> */}
        <div>
          <Home />
        </div>
        {/* </Routes> */}
      </div>
    );
  }
}
export default App;
