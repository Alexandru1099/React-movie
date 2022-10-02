import React from "react";
import "../components.css";
import "./selectedMovie.css";
import { useSelector } from "react-redux/es/exports";
import DetailsMovieSelected from "../DetailsMovieSelected";
import SimilarMovies from "../Recomandation/SimilarMovies";

const SelectMovie = () => {
  const isAuth = useSelector((state) => state.authentication.authentication);
  
  return (
    <section className="mx-5">
      <div className="m-2">
        <DetailsMovieSelected />
      </div>
      <SimilarMovies />
    </section>
  );
};

export default SelectMovie;
