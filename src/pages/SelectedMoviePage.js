import React from "react";
import Navbar from "../components/navbar";
import SelectedMovie from "../components/SelectedMovie/SelectedMovie";
import WatchList from "../components/WatchList/WatchList";
import { useSelector } from "react-redux/es/exports";
import { Redirect } from "react-router-dom";

const SelectedMoviePage = () => {
  // const isAuth = useSelector((state) => state.authentication.authentication);
  const isAuth = localStorage.getItem("authentication");
  console.log(isAuth);

  return (
    <div>
      {isAuth ? (
        <section>
          <Navbar />
          <SelectedMovie />
          <WatchList />
        </section>
      ) : (
        <Redirect to="/signup" />
      )}
    </div>
  );
};
export default SelectedMoviePage;
