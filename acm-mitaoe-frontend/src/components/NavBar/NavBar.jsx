import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div>
          <NavLink to="/" className="logo">
            ACM<span> MITAOE</span>
          </NavLink>
        </div>
        <ul className="nav-elements">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <MenuIcon className="menu-icon" onClick={handleShowMenu} />
      </div>

      {showMenu && (
        <div className="menu-content-box">
          <ul className="menu-elements">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "nav-link"}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <CloseIcon className="close-icon" onClick={handleShowMenu} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
