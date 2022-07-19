import React from "react";
import { Chip } from "@mui/material";
import photoMovie from "../../images/Die_hard.jpg";


const SimilarMovies = () => {
    return (
        <section className="col px-0">
        <div className="card w-100 p-0 border-0">
          <div className="card-header border-0 bg-white p-0">
            <h4 className="" href="#">Similar movie to FILM</h4>
          </div>
          <div className="card-body d-flex flex-row px-0">
            <img className="img-similar w-25 p-0 me-3" src={photoMovie} />
            <a className="mt-3 me-3 col-3">Titlu film</a>
            <div className="mt-3  p-0 me-1">
              <p className="text-muted text-end me-3 fs-14 ">
                Viewer: 2022
              </p>
            </div>
            <div className="mt-2 fs-4">
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
