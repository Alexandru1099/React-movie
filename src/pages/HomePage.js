import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/ListMovie";
import WatchList from "../components/WatchList";
import { LocalLaundryService } from "@mui/icons-material";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      refMovie: React.createRef(),
    };
    console.log(this.state);
    console.log(props);
  }
  setMovie(a) {
    console.log(a);
    this.Setstate({ refMovie: a });
  }
  render() {
    return (
      <div className="home">
        <Navbar />
        <ListMovie />
        <WatchList />
      </div>
    );
  }
}
export default HomePage;
