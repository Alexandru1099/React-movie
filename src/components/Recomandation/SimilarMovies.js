import React from "react";
import { Chip } from "@mui/material";
import photoMovie from "../../images/Die_hard.jpg";

const SimilarMovies = () => {
  let movies = JSON.parse(localStorage.getItem("similar"));
  return (
    <section>
      <div className="card w-100 p-0 border-0">
        <div className="card-header border-0 bg-white p-0">
          <h4 className="">Similar movie to FILM</h4>
        </div>
        {movies.length > 1
          ? movies.map((movie) => {
              return (
                <div key={movie.id} className="card-body d-flex flex-row px-0">
                  <img className="img-similar w-25 p-0 me-3" src={photoMovie} />
                  <a className="mt-3 me-3 col-3">{movie.title}</a>
                  <div className="mt-3  p-0 me-1">
                    <p className="text-muted text-end me-3 fs-14 ">
                      Viewer: 222
                    </p>
                  </div>
                  <div className="mt-2 fs-4">
                    <Chip className="text-white fs-4 icon-add" label="+" />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default SimilarMovies;
