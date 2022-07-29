import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/state";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory;
  const logout = () => {
    dispatch(logout());
    console.log("aici");
    history.replace("/signup");
  };
  return (
    <div className="navbar w-100">
<Link to='/signup'
      <button onClick={logout}>
        Logout
        </button>
        </Link>
      <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
      <input
        className="search text-center mx-5"
        type="text"
        placeholder="Search for a movie..."
        name="search"
        onChange={(e) => {
          this.props.setFunction(e.target.value);
        }}
      />
    </div>
  );
};
export default Navbar;
