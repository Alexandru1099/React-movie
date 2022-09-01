import React, { useEffect, useState } from "react";
import "./components.css";
import NOIMG from "../images/no-image.png";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { addWatchList } from "../store/watchList";

const ListMovie = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.watchList.watchList);
  const searchMovie = useSelector((state) => state.searchMovie.movies.payload);
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState(1);

  async function fetchMovie() {
    const response = await fetch(
      `http://localhost:3000/movie${
        searchMovie == undefined || searchMovie == ""
          ? ""
          : `?search=` + searchMovie
      }`
    );
    const results = await response.json();
    setMovies(results);
    results.message == "No movies" ? setMessage(0) : setMessage(1);
  }
  useEffect(() => {
    fetchMovie();
  }, [searchMovie]);

  function ceva(e) {
    dispatch(addWatchList(e));
  }
  return (
    <div className="p-5">
      {message == 0 ? (
        ""
      ) : movies.length > 1 ? (
        movies.map((movie) => {
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
                  Release: {movie.release}
                </p>
                <p className="text-muted text-end m-0 fs-14">
                  Content: {movie.content}
                </p>
                <p className="text-muted text-end m-0 fs-14">
                  Runtime: {movie.runtime}
                </p>
              </div>
              <Chip
                onClick={(e) => ceva(movie)}
                style={{ backgroundColor: "mediumaquamarine" }}
                className="text-white fs-4 mt-4"
                label="+"
              />
            </div>
          );
        })
      ) : (
        <div key={movies.id} className="card flex-row border-0">
          <img src={movies.photo} className="mt-3 card-img-left" alt="..." />
          <div className="card-body">
            <Link to={`/movie/${movies.id}`}>
              <h6 className="text-primary card-title">{movies.title}</h6>
            </Link>
            <p className="text-muted card-text fs-14">{movies.context}</p>
            <p className="text-muted card-text fs-14">
              Starring:{movies.starring}
            </p>
          </div>
          <div className="m-4 col-auto">
            <p className="text-muted text-end m-0 fs-14">
              Release: {movies.release}
            </p>
            <p className="text-muted text-end m-0 fs-14">
              Content: {movies.content}
            </p>
            <p className="text-muted text-end m-0 fs-14">
              Runtime: {movies.runtime}
            </p>
          </div>
          <Chip
            onClick={(e) => ceva(movies)}
            style={{ backgroundColor: "mediumaquamarine" }}
            className="text-white fs-4 mt-4"
            label="+"
          />
        </div>
      )}
    </div>
  );
};

export default ListMovie;
