/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import { useLocation, Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./SideNavbar.css";

export const SideNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Mobile Hamburger */}
          {isMobile && (
            <div className="mobile-nav-header">
              <IconButton onClick={toggleMenu} aria-label="Open navigation menu"
                sx={{
                  height: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
                  width: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
                  padding: { xs: '0.3rem', sm: '0.4rem', md: '0.5rem' },
                }}
              >
                <MenuIcon
                  sx={{ fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' } }}
                />
              </IconButton>
            </div>
          )}

          {/* Desktop Links */}
          {!isMobile && (
            <div className="desktop-nav-links">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={location.pathname === link.to ? "nav-link active" : "nav-link"}
                >
                  <Typography>{link.label}</Typography>
                </Link>
              ))}
              <Link to="/resume" className="nav-link">
                <DescriptionIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Resume</Typography>
              </Link>

            </div>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && isMobile && (
        <>
          <div className="overlay" onClick={closeMenu}></div>
          <div
            className={`side-drawer ${isOpen ? "side-drawer-open" : ""}`}
            style={{
              background: isDark ? theme.palette.background.paper : '#fff',
              color: isDark ? theme.palette.text.primary : '#575757',
            }}
          >
            <div
              className="drawer-header"
              style={{
                background: isDark ? theme.palette.background.default : '#f8f9fa',
                color: isDark ? theme.palette.text.primary : '#575757',
                borderBottom: `1px solid ${isDark ? theme.palette.divider : '#e0e0e0'}`,
              }}
            >
              <IconButton onClick={closeMenu} aria-label="Close navigation menu"
                sx={{ color: isDark ? theme.palette.text.primary : '#575757' }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="drawer-links">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={location.pathname === link.to ? "drawer-link active" : "drawer-link"}
                  onClick={closeMenu}
                  style={{
                    color: isDark ? theme.palette.text.primary : '#575757',
                    borderLeft: location.pathname === link.to && isDark ? `3px solid ${theme.palette.primary.main}` : '',
                  }}
                >
                  <Typography fontWeight={600}>{link.label}</Typography>
                </Link>
              ))}
              <Link to="/resume" className="drawer-link" onClick={closeMenu}>
                <DescriptionIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography fontWeight={600}>Resume</Typography>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
