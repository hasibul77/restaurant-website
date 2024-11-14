import React, { useState, useEffect } from "react";
import logo from "./../assets/images/Logo.png"; // Adjust the path as needed
import "./../styles/Navbar.css";

function Navbar() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) { // Change this value to control when the color changes
      setNavbarColor("#BD1F17");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-md" style={{ backgroundColor: navbarColor }}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Restaurant Logo" className="navbar-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-items">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Clients</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
          <button className="btn btn-warning book">Book a Table</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
