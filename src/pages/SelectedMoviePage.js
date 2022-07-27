import React, { useState } from "react";
import Navbar from "../components/navbar";
import SelectedMovie from "../components/SelectedMovie/SelectedMovie";
import WatchList from "../components/WatchList/WatchList";

const SelectedMoviePage = () => {
  
  return (
    <div>
      <Navbar />
      <SelectedMovie />
      <WatchList />
    </div>
  );
};
export default SelectedMoviePage;
