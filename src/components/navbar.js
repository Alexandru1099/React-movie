import React from "react";
import "./components.css";

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  searchMovie(movie) {
    console.log(movie);
    this.props.refMovie = movie;
  }
  render() {
    return (
      <div className="navbar w-100">
        <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
        <input
          className="search text-center mx-5"
          type="text"
          placeholder="Search for a movie..."
          name="search"
          onChange={(e) => {
            this.props.setFunction(e.target.value);
          }}
        />
      </div>
    );
  }
}
export default Navbar;
