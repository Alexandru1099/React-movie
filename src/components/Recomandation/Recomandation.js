import React from "react";
import DetailsMovieSelected from "../DetailsMovieSelected";
import Navbar from "../navbar";
import SimilarMovies from "./SimilarMovies";

const Recomandation = () => {
    return (
        <section>
            <h1 className="text-strong m-3">3.Recoamndation</h1>
            <p className="mx-5">A movie recommendation system, or a movie recommender system, is an ML-based approach to filtering or predicting the users’
                film preferences based on their past choices and behavior. It’s an advanced filtration mechanism that predicts the possible movie
                choices of the concerned user and their preferences towards a domain-specific item, aka movie.</p>
            <div className="mx-5"><Navbar /></div>
            <div className="mx-5">
                <DetailsMovieSelected />
                <SimilarMovies />
            </div>
        </section>
    );
};

export default Recomandation;
