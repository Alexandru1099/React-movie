import React, { useEffect, useState } from "react";
import "./components.css";
import NOIMG from "../images/no-image.png";
import { useSelector } from "react-redux/es/exports";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

const ListMovie = () => {
  const searchMovie = useSelector((state) => state.searchMovie.movies.payload);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
        console.log(searchMovie);
        const response = await fetch(`http://localhost:3000/article`);
        const results = await response.json();
        setMovies(results);
        console.log(results);
    }
    fetchMovie();
  }, []);

    return (
      <div className="p-5">
        {movies.map((movie) => {
          if (movie.photo === null) {
            movie.photo = NOIMG;
          }
          return (
            <div key={movie.id} className="card flex-row border-0">
              <img src={movie.photo} className="mt-3 card-img-left" alt="..." />
              <div className="card-body">
                <Link to={`/movie/${movie.id}`}>
                  <h6 className="text-primary card-title">{movie.title}</h6>
                </Link>
                <p className="text-muted card-text fs-14">{movie.context}</p>
                <p className="text-muted card-text fs-14">
                  Starring:{movie.starring}
                </p>
              </div>
              <div className="m-4 col-auto">
                <p className="text-muted text-end m-0 fs-14">
                  Releses: {movie.releses}
                </p>
                <p className="text-muted text-end m-0 fs-14">
                  Content: {movie.content}
                </p>
                <p className="text-muted text-end m-0 fs-14">
                  Runtime: {movie.runtime}
                </p>
              </div>
              <Chip
                style={{ backgroundColor: "mediumaquamarine" }}
                className="text-white fs-4 mt-4"
                label="+"
              />
            </div>
          );
        })}
      </div>
    );
}

export default ListMovie;
