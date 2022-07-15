import React from "react";
import { Chip } from "@mui/material";
import photoMovie from "../images/no-image.png";

const DetailsMovieSelected = () => {
  return (
    <section>
      <div className="row m-3">
        <img className="img w-25 p-0" src={photoMovie} />
        <div className="card w-75 p-0 border-0">
          <div className="card-header border-0 bg-white pb-0">
            <a href="#">Titlu film</a>
          </div>
          <div className="card-body row flex-nowrap">
            <p className="col-7 card-text fs-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            <div className="m-4 mt-0 col-auto flex-lg-fill">
              <p className="text-muted text-end m-0 fs-14">
                Releses: 2022
              </p>
              <p className="text-muted text-end m-0 fs-14">
                Content: PG-13
              </p>
              <p className="text-muted text-end m-0 fs-14">
                Runtime: 2h 26min
              </p>
            </div>
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

export default DetailsMovieSelected;
