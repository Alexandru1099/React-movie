import React from "react";
import "./components.css";

const Navbar = () => {
  return (
    <div className="navbar w-100">
      <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
      <input className="search text-center mx-5" type="text" placeholder="Search for a movie..." name="search" />
    </div>
  );
};
export default Navbar;
