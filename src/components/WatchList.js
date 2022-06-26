import React from "react";

class WatchList extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    watchList: [],
  };
  render() {
    return (
      <div className="mb-2 card bg-light text-dark float-end position-relativ m-3">
        <div className="footer">
          <div className="card-header">
            <h2>Watchlist</h2>
          </div>
          <div className="card-body">
            <p className="card-text m-0">Your watchlist is empty.</p>
            <p className="card-text">You should add some movies!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WatchList;
