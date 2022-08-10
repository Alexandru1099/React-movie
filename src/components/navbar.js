import React from "react";
import "./components.css";
import { useDispatch } from "react-redux";
import { logout } from "../store/state";
import { searchMovies } from "../store/searchMovie";

const Navbar = () => {
  const dispatch = useDispatch();
  function logout() {
    localStorage.setItem("authentication", false);
    window.location.reload();
  }
  function search(e) {
    dispatch(searchMovies(e));
  }
  return (
    <div className="navbar w-100">
      <button type="button" className="btn btn-danger m-2" onClick={logout}>
        Logout
      </button>
      <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
      <input
        className="search text-center mx-5"
        type="text"
        placeholder="Search for a movie..."
        name="search"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};
export default Navbar;
