import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/ListMovie";
import WatchList from "../components/WatchList/WatchList";
import { useSelector } from "react-redux/es/exports";
import { Redirect } from "react-router-dom";

const Home = () => {
  const isAuth = useSelector((state) => state.authentication.authentication);
  console.log(isAuth);
  return (
    <div className="home">
      {isAuth ? (
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
