import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="Navbar Logo" />
    </nav>
  );
};

export default Navbar;
