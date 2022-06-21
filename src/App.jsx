import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./home/home";

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
      </div>
      //   <div  className="w-100 text-center">
      //     <h1>{this.state.msg}</h1>
      //   </div>
    );
  }
}
export default App;
