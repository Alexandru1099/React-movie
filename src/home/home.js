import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/ListMovie";
import { LocalLaundryService } from "@mui/icons-material";

class Home extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      movies: [],
      refMovie: React.createRef()
    };
    console.log(this.state);
    console.log(props)

  }
  setMovie(a) {
    console.log(a);
    // Setstate({ refMovie: a});
    // this.refMovie = a;
  }
  render() {
    return (
      <div className="home">
        <Navbar refMovie={this.refMovie} setFunction={this.setMovie} />
        <ListMovie refMovie={this.refMovie} />
      </div>
    );
  };
}
export default Home;
