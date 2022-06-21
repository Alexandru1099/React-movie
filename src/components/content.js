import React from "react";

class Content extends React.Component {
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
      <div>
        <p></p>
      </div>
    );
  }
}

export default Content;
