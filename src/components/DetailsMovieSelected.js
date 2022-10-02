import React, { useState } from "react";
import { Chip } from "@mui/material";
import { useParams } from "react-router-dom";

const DetailsMovieSelected = () => {
  const params = useParams();
  const [photoMovie, setPhotoMovie] = useState();
  const [title, setTitle] = useState();
  const [context, setContext] = useState();
  const [releases, setRelease] = useState();
  const [starring, setStarring] = useState();
  const [content, setContent] = useState();
  const [runtime, setRuntime] = useState();
  fetch(`http://localhost:3000/movie/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      setPhotoMovie(data.photo);
      setTitle(data.title);
      setContext(data.context);
      setStarring(data.starring);
      setContent(data.content);
      setRuntime(data.runtime);
      setRelease(data.release);
    })
    .catch((err) => {
      alert(err.message);
    });
  return (
    <section>
      <div className="card flex-row border-0">
        <img src={photoMovie} className="mt-3 card-img-left" alt="..." />
        <div className="card-body">
          <h6 className="text-primary card-title">{title}</h6>
          <p className="text-muted card-text fs-14">{context}</p>
          <p className="text-muted card-text fs-14">Starring:{starring}</p>
        </div>
        <div className="m-4 col-auto">
          <p className="text-muted text-end m-0 fs-14">Releses: {releases}</p>
          <p className="text-muted text-end m-0 fs-14">Content: {content}</p>
          <p className="text-muted text-end m-0 fs-14">Runtime: {runtime}</p>
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
