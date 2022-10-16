import React from "react";
import Navbar from "../components/navbar";
import SelectedMovie from "../components/SelectedMovie/SelectedMovie";
import WatchList from "../components/WatchList/WatchList";
import { Link, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Button, Chip } from "@mui/material";

const SelectedMoviePage = () => {
  const isAuth = localStorage.getItem("authentication");

  return (
    <div>
      {isAuth ? (
        <section>
          <Navbar />
          <SelectedMovie />
          <WatchList />
          <Chip
            label="Recomandation movie"
            color="success"
            component="a"
            href="/recomandation"
            clickable
          />
        </section>
      ) : (
        <Redirect to="/signup" />
      )}
    </div>
  );
};
export default SelectedMoviePage;
