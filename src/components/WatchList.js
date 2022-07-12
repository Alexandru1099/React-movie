import React from "react";
import "./components.css";
import { CFooter } from "@coreui/react";

class WatchList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    watchList: [],
  };
  render() {
    return (
      <CFooter>
       <div className="mb-2 card text-dark m-3">
           <div className="card-header">
             <h2>Watchlist</h2>
           </div>
           <div className="card-body">
             <p className="card-text m-0">Your watchlist is empty.</p>
             <p className="card-text">You should add some movies!</p>
           </div>
       </div>
    </CFooter>
    );
  }
}

export default WatchList;
