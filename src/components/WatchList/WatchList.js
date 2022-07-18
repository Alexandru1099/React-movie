import React from "react";
import './watchList.css'

class WatchList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    watchList: [],
  };
  render() {
    return (
      <div className="float-end footer m-2 ">
        <div className="card card-border">
          <div className="card-header">
            <h6>Watchlist</h6>
          </div>
          <div className="card-body">
            <p className="card-text m-0 fs-12">Your watchlist is empty.</p>
            <p className="card-text fs-12">You should add some movies!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WatchList;
