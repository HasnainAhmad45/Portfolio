/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Typography, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import DescriptionIcon from "@material-ui/icons/Description";
import { useLocation, Link } from "react-router-dom";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Hamburger menu - only visible on small screens */}
          <Hidden mdUp>
            <div className="mobile-nav-header">
              <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </button>
            </div>
          </Hidden>

          {/* Desktop navigation - only visible on medium screens and up */}
          <Hidden smDown>
            <div className="desktop-nav-links">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to="/projects"
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <Typography>Projects</Typography>
              </Link>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <Typography>Contact</Typography>
              </Link>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <DescriptionIcon
                  style={{ marginRight: "8px", fontSize: "20px" }}
                />
                <Typography>Resume</Typography>
              </a>
            </div>
          </Hidden>
        </div>
      </nav>

      {/* Overlay and mobile drawer */}
      {isOpen && (
        <>
          <div className="overlay" onClick={closeMenu}></div>
          <div className={`side-drawer ${isOpen ? "side-drawer-open" : ""}`}>
            <div className="drawer-header">
              <button
                className="close-btn"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="drawer-links">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "drawer-link active"
                    : "drawer-link"
                }
                onClick={closeMenu}
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to="/projects"
                className={
                  location.pathname === "/projects"
                    ? "drawer-link active"
                    : "drawer-link"
                }
                onClick={closeMenu}
              >
                <Typography>Projects</Typography>
              </Link>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "drawer-link active"
                    : "drawer-link"
                }
                onClick={closeMenu}
              >
                <Typography>Contact</Typography>
              </Link>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-link"
                onClick={closeMenu}
              >
                <DescriptionIcon
                  style={{ marginRight: "8px", fontSize: "20px" }}
                />
                <Typography>Resume</Typography>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};
