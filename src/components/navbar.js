import React from "react";
import "./components.css";
import { useDispatch } from "react-redux";
import { logout } from "../store/state";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory;
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
      />
    </div>
  );
};
export default Navbar;
