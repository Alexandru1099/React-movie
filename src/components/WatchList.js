import React from "react";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    watchList: [],
  };
  render() {
    return (
      <div class="footer">
        <div class="mb-2 card bg-light text-dark float-end position-relativ m-3">
          <div class="card-header">
            <h2>Watchlist</h2>
          </div>
          <div class="card-body">
            <p class="card-text m-0">Your watchlist is empty.</p>
            <p class="card-text">You should add some movies!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WatchList;
