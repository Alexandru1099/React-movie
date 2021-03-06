import React from "react";
import "./components.css";
import NOIMG from "../images/no-image.png";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

class ListMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:3000/article";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({ movies: data });
    // console.log(this.state.movies);
  }
  render() {
    return (
      <div className="p-5">
        {this.state.movies.map((movie) => {
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
}

export default ListMovie;
