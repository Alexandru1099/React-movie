import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../components.css";
import "./selectedMovie.css";
import { useSelector } from "react-redux/es/exports";
import { Redirect } from "react-router-dom";
import DetailsMovieSelected from "../DetailsMovieSelected";
import SimilarMovies from "../Recomandation/SimilarMovies";

const SelectMovie = () => {
  const isAuth = useSelector((state) => state.authentication.authentication);
  console.log(isAuth);
  
  return (
    <section className="mx-5">
      <div className="m-2">
        <DetailsMovieSelected />
      </div>
      <SimilarMovies />
      <Link to="/recomandation">
        <p>recomandation</p>
      </Link>
    </section>
  );
};

export default SelectMovie;
