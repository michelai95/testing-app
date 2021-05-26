import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarTitle">
        
      </div>
      <div className="navbarMenuItems">
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/Login">
          Login
        </Link>
        <Link className="menu-item" to="/Reports">
          Reports
        </Link>
        <Link className="menu-item" to="/SignOut">
          Sign Out
        </Link>
      </div>
    </div>
  );
}
