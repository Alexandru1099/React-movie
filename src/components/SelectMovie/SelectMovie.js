import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../components.css";
import "./selectedMovie.css";
import { Chip } from "@mui/material";
import photoMovie from "../../images/no-image.png";

const SelectMovie = () => {
  return (
    <section>
      <div className="row m-3">
        <img className="img w-25 p-0" src={photoMovie} />
        <div className="card w-75 p-0 border-0">
          <div className="card-header border-0 bg-white pb-0">
            <a href="#">Titlu film</a>
          </div>
          <div className="card-body row ">
            <p className="col-7 card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            <div className="col-5 row flex-md-nowrap">
              <div className="col-9 text-end text-muted">
                <p className="m-0">Release: 2022</p>
                <p className="m-0">Content: PG-13</p>
                <p className="m-0">Runtime: 2h 26min</p>
              </div>
              <div className="col-3">
                <Chip
                  style={{ backgroundColor: "mediumaquamarine" }}
                  className="text-white fs-4"
                  label="+"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectMovie;
