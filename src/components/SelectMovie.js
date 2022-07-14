import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./components.css";
import './selectedMovie.css'
import photoMovie from '../images/no-image.png'
import { Chip } from "@mui/material";


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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="col-5 row">
                <div className="col-9 text-end text-muted">
                    <p>Release: 2022</p>
                    <p>Content: PG-13</p>
                    <p>Runtime; 2h 26min</p>
                </div>
                <div className="col-3">
                    <button className="btn btn-secondary">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    );
};

export default SelectMovie;
