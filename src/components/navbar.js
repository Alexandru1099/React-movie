import React from "react";
import "./components.css";
import { useState } from "react";

const Navbar = (placeholder) => {
  const [searchTerm, setSerchTerm] = useState("");
  return (
    <div className="navbar w-100">
      <span className="text-white m-4 fs-3">Welcome to RVmDB</span>
      <input
        className="search text-center mx-5"
        type="text"
        placeholder={placeholder}
        name="search"
        onChange={(event) => setSerchTerm(event.target.value)}
      />
    </div>
  );
};
export default Navbar;
