import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/ListMovie";
import WatchList from "../components/WatchList/WatchList";
import { Redirect } from "react-router-dom";

const Home = () => {
  const isAuth = localStorage.getItem("authentication");
  return (
    <div className="home">
      {isAuth === "true" ? (
        <div>
          <Navbar /> <ListMovie /> <WatchList />
        </div>
      ) : (
        <Redirect to="/signup" />
      )}
    </div>
  );
};
export default Home;
