import React, { useState } from "react";
import { Chip } from "@mui/material";
import photoMovie from "../images/Die_hard.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetailsMovieSelected = () => {
  const params = useParams();
  const [photoMovie, setPhotoMovie] = useState();
  const [title, setTitle] = useState();
  const [context, setContext] = useState();
  const [releases, setRelease] = useState();
  const [content, setContent] = useState();
  const [runtime, setRuntime] = useState();
  fetch(`http://localhost:3000/article/${params.id}`, {
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
