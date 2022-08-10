import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./watchList.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NOIMG from "../../images/no-image.png";

const WatchList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const movieList = useSelector((state) => state.watchList.watchList);
  return (
    <div className="float-end footer m-2">
      <div
        className={
          movieList.length > 0
            ? "card card-border btn-color"
            : "card card-border"
        }
        {...(movieList && { onClick: handleShow })}
      >
        <div className="card-header card-header-list">
          <h6>Watchlist</h6>
        </div>
        <div className="card-body">
          <p className="card-text m-0 fs-12">
            {movieList.length > 0
              ? "You have some movie in watch-list, click me to see"
              : "Your watchlist is empty."}
          </p>
          <p className="card-text fs-12">
            {movieList.length > 0 ? "" : "You should add some movies!"}
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista ta de filme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {movieList.map((movie) => {
            if (movie.photo === null) {
              movie.photo = NOIMG;
            }
            return (
              <div key={movie.payload.id} className="card flex-row border-0">
                <img
                  src={movie.payload.photo}
                  className="mt-3 card-img-left"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="text-primary card-title">
                    {movie.payload.title}
                  </h6>
                  <p className="text-muted card-text fs-14">
                    Starring:{movie.payload.starring}
                  </p>
                </div>
                <div className="m-4 col-auto">
                  <p className="text-muted text-end m-0 fs-14">
                    Releses: {movie.payload.releses}
                  </p>
                  <p className="text-muted text-end m-0 fs-14">
                    Content: {movie.payload.content}
                  </p>
                  <p className="text-muted text-end m-0 fs-14">
                    Runtime: {movie.payload.runtime}
                  </p>
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Inchide
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salveaza
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WatchList;
