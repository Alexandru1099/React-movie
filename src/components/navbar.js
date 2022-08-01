import React, { useState } from "react";
import "./components.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { logout } from "../store/state";
import { searchMovies } from "../store/searchMovie";

const Navbar = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [searchMovie, setsearchMovie] = useState();
  function search (e) {
    dispatch(searchMovies(e));
  }
  return (
    <div className="navbar w-100">
      <button onClick={() => dispatch(logout())}>
        Logout
        </button>
      <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
      <input
        className="search text-center mx-5"
        type="text"
        placeholder="Search for a movie..."
        name="search"
        onChange={e =>search(e.target.value)}
      />
    </div>
  );
};
export default Navbar;
