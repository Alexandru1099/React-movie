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
      <div className="card mt-4">
        {this.state.movies.map((movie) => {
          return (
            <div className="card flex-row">
              <img src="" className="card-img-left" alt="..." />
              <div className="card-body">
                <h6 className="text-primary card-title">{movie.title}</h6>
                <p className="text-muted card-text">{movie.context}</p>
                <p className="text-muted card-text">Starring: ... nu ceva </p>
              </div>
              <div className="m-4 col-auto">
                <p className="text-muted text-end">Releses: 2022</p>
                <p className="text-muted text-end">Content: R</p>
                <p className="text-muted text-end">Runtime: 1h32mins</p>
              </div>
              <Chip className="badge fs-4 m-3" label="+" color="success" />
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
