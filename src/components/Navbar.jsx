import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo-text">CampusHire</span>
      </div>
      <div className="nav-right">
        <Link to="/login" className={isActive("/login")}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
