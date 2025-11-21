import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Content } from '../components/content/Content';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialButton } from '../components/content/SocialButton';
import { SideNavbar } from '../components/nav/SideNavbar';
import { About } from '../components/about/About';
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  headerButtons: {
    position: 'fixed',
    top: '1.5rem',
    right: '2rem',
    zIndex: 101,
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <SideNavbar />
        <Content />
        <div className={classes.headerButtons}>
          <ThemeToggle />
          <SocialButton />
        </div>
      </div>
      <About />
    </>
  );
};