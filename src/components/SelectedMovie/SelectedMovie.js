import React from "react";
import "../components.css";
import "./selectedMovie.css";
import { useSelector } from "react-redux/es/exports";
import DetailsMovieSelected from "../DetailsMovieSelected";
import SimilarMovies from "../Recomandation/SimilarMovies";
import { Redirect } from "react-router-dom";

const SelectMovie = () => {
  const isAuth = localStorage.getItem("authentication");

  return (
    <div>
      {isAuth ? (
        <section className="mx-5">
          <div className="m-2">
            <DetailsMovieSelected />
          </div>
          <SimilarMovies />
        </section>
      ) : (
        <Redirect to="/signup" />
      )}
    </div>
  );
};

export default SelectMovie;
