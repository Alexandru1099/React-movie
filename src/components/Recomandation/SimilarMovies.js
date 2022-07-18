import React from "react";
import { Chip } from "@mui/material";
import photoMovie from "../../images/Die_hard.jpg";


const SimilarMovies = () => {
    return (
        <section className="container row">
        <div className="col card w-75 p-0 border-0">
          <div className="card-header border-0 bg-white pb-0">
            <h4 href="#">Similar movie to FILM</h4>
          </div>
          <div className="card-body row flex">
            <img className="img-similar w-25 p-0" src={photoMovie} />
            <a className="mt-3 col-2">Titlu film</a>
            <div className="mt-3 mt-0 col-auto p-0">
              <p className="text-muted text-end m-0 fs-14">
                Viewer: 2022
              </p>
            </div>
            <div className="mt-2 mt-0 col-auto fs-4">
              <Chip
                className="text-white fs-4 icon-add"
                label="+"
              />
            </div>
          </div>
        </div>
        <div className="col card w-75 p-0 border-0">
          <div className="card-header border-0 bg-white pb-0">
            <h4 href="#">Similar movie to FILM</h4>
          </div>
          <div className="card-body row flex">
            <img className="img-similar w-25 p-0" src={photoMovie} />
            <a className="mt-3 col-2">Titlu film</a>
            <div className="mt-3 mt-0 col-auto p-0">
              <p className="text-muted text-end m-0 fs-14">
                Viewer: 2022
              </p>
            </div>
            <div className="mt-2 mt-0 col-auto fs-4">
              <Chip
                className="text-white fs-4 icon-add"
                label="+"
              />
            </div>
          </div>
        </div>
        </section>
    );
};

export default SimilarMovies;
