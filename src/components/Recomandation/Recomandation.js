import { Chip } from "@mui/material";
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
        <section>
      <div className="card flex-row border-0">
        <img className="mt-3 card-img-left" alt="..." />
        <div className="card-body">
          <h6 className="text-primary card-title">{}</h6>
          <p className="text-muted card-text fs-14">{}</p>
          <p className="text-muted card-text fs-14">Starring:{}</p>
        </div>
        <div className="m-4 col-auto">
          <p className="text-muted text-end m-0 fs-14">Releses: {}</p>
          <p className="text-muted text-end m-0 fs-14">Content: {}</p>
          <p className="text-muted text-end m-0 fs-14">Runtime: {}</p>
        </div>
        <Chip
          style={{ backgroundColor: "mediumaquamarine" }}
          className="text-white fs-4 mt-4"
          label="+"
        />
      </div>
    </section>
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
