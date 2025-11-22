import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material"; // updated imports
import { Brightness4, Brightness7 } from "@mui/icons-material"; // updated imports
import { styled } from "@mui/material/styles"; // for styling

// Styled IconButton using MUI v5
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(6),
  right: theme.spacing(2),
  height: "2.5rem",
  width: "2.5rem",
  padding: '0.5rem',
  zIndex: 1500, // Raised z-index for prominence above other elements
  [theme.breakpoints.down('sm')]: {
    height: '2.2rem',
    width: '2.2rem',
    padding: '0.4rem',
  },
  '@media (max-width:400px)': {
    height: '2rem',
    width: '2rem',
    padding: '0.3rem',
  }
}));

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // set icon font size based on responsive button size
  const iconResponsive = {
    fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' }
  };
  return (
    <Tooltip
      title="Toggle theme"
      placement="right"
      TransitionComponent={Zoom}
    >
      <StyledIconButton onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? (
          <Brightness4 sx={iconResponsive} />
        ) : (
          <Brightness7 sx={iconResponsive} />
        )}
      </StyledIconButton>
    </Tooltip>
  );
};
