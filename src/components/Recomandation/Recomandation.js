import React from "react";
import DetailsMovieSelected from "../DetailsMovieSelected";
import Navbar from "../navbar";
import SimilarMovies from "./SimilarMovies";
import SwitchCardRecomandation from "./SwitchCardRecomandation";

const Recomandation = () => {
  return (
    <section>
      <h4 className="text-strong m-3">3.Recomandation</h4>
      <p className="mx-3">
        A movie recommendation system, or a movie recommender system, is an
        ML-based approach to filtering or predicting the users’ film preferences
        based on their past choices and behavior. It’s an advanced filtration
        mechanism that predicts the possible movie choices of the concerned user
        and their preferences towards a domain-specific item, aka movie.
      </p>
      <div className="mx-3">
        <Navbar />
      </div>
      <div className="mx-5">
        <div className="m-4">
          <DetailsMovieSelected />
        </div>
        <div className="container row">
          <SimilarMovies />
          <SwitchCardRecomandation />
        </div>
      </div>
    </section>
  );
};

export default Recomandation;
