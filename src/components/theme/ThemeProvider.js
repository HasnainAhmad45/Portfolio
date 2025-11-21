import React, { useEffect, useState, createContext } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "./Themes"; // ensure these are MUI v5 createTheme objects

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialMode = () => {
    if (typeof localStorage === "undefined") return true;
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) return savedMode;
    return !!userPrefersDark;
  };

  const getPrefColorScheme = () => {
    if (!window.matchMedia) return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [themeMode, setThemeMode] = useState(getInitialMode() ? "dark" : "light");

  const toggleTheme = () => {
    setThemeMode(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("dark", JSON.stringify(themeMode === "dark"));
    }
  }, [themeMode]);

  const appliedTheme = themeMode === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <MuiThemeProvider theme={appliedTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
