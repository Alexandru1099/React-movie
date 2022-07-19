import React from "react";
import { Chip } from "@mui/material";
import photoMovie from "../images/Die_hard.jpg";
import { Link } from "react-router-dom";

const DetailsMovieSelected = () => {
  return (
    <section>
      <div className="card flex-row border-0">
        <img src={photoMovie} className="mt-3 card-img-left" alt="..." />
        <div className="card-body">
          <Link to={`/movie/id}`}>
            <h6 className="text-primary card-title">Titltul fim</h6>
          </Link>
          <p className="text-muted card-text fs-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <p className="text-muted card-text fs-14">Starring:Cineva Ciebac</p>
        </div>
        <div className="m-4 col-auto">
          <p className="text-muted text-end m-0 fs-14">Releses: 1999</p>
          <p className="text-muted text-end m-0 fs-14">Content: AAAAAA</p>
          <p className="text-muted text-end m-0 fs-14">Runtime: 1H20</p>
        </div>
        <Chip
          style={{ backgroundColor: "mediumaquamarine" }}
          className="text-white fs-4 mt-4"
          label="+"
        />
      </div>
    </section>
  );
};

export default DetailsMovieSelected;
