import React from "react";
import "./components.css";
import { Chip } from "@mui/material";

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
    console.log(data);
    this.setState({ movies: data });
    console.log(this.state.movies);
  }
  render() {
    return (
      <div className="p-5">
        {this.state.movies.map((movie) => {
          if (movie.photo === null) {
            movie.photo = "https://picsum.photos/200";
          }
          return (
            <div className="card flex-row border-0">
              <img src={movie.photo} className="mt-3 card-img-left" alt="..." />
              <div className="card-body">
                <h6 className="text-primary card-title">{movie.title}</h6>
                <p className="text-muted card-text">{movie.context}</p>
                <p className="text-muted card-text">
                  Starring:{movie.starring}
                </p>
              </div>
              <div className="m-4 col-auto">
                <p className="text-muted text-end m-0">
                  Releses: {movie.releses}
                </p>
                <p className="text-muted text-end m-0">
                  Content: {movie.content}
                </p>
                <p className="text-muted text-end m-0">
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
      //   <div class="card">
      //   <img class="card-img-top" src="..." alt="Card image cap">
      //   <div class="card-body">
      //     <h5 class="card-title">Card title</h5>
      //     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      //     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      //   </div>
      // </div>
    );
  }
}

export default ListMovie;
