import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Fade } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { SideNavbar } from "../components/nav/SideNavbar";
import { SocialButton } from "../components/content/SocialButton";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    gap: theme.spacing(3),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  viewButton: {
    padding: theme.spacing(1.5, 3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.type === 'light' ? theme.palette.foreground.default : theme.palette.background.default,
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '1rem',
    textTransform: 'none',
    fontFamily: 'Roboto Mono, monospace',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    transition: 'all 0.5s ease',
    minWidth: '180px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      transform: 'translateY(-2px)',
      boxShadow: '0px 6px 12px -1px rgba(0,0,0,0.3), 0px 10px 20px 0px rgba(0,0,0,0.19), 0px 3px 24px 0px rgba(0,0,0,0.16)',
    },
  },
  downloadButton: {
    padding: theme.spacing(1.5, 3),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.type === 'light' ? theme.palette.foreground.default : theme.palette.background.default,
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '1rem',
    textTransform: 'none',
    fontFamily: 'Roboto Mono, monospace',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    transition: 'all 0.5s ease',
    minWidth: '180px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      transform: 'translateY(-2px)',
      boxShadow: '0px 6px 12px -1px rgba(0,0,0,0.3), 0px 10px 20px 0px rgba(0,0,0,0.19), 0px 3px 24px 0px rgba(0,0,0,0.16)',
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 500,
    color: theme.palette.foreground.default,
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    fontFamily: 'Roboto Mono, monospace',
    fontWeight: 500,
  },
  icon: {
    fontSize: '1.25rem',
    marginRight: theme.spacing(1),
  },
}));

export const Resume = () => {
  const classes = useStyles();

  const handleView = () => {
    window.open('/Hasnain_Ahmad_Resume.pdf', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Hasnain_Ahmad_Resume.pdf';
    link.download = 'Hasnain_Ahmad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box className={classes.container}>
      <DisplacementSphere />
      <ThemeToggle />
      
      <SideNavbar/>
      <SocialButton/>
      <Fade in={true} timeout={1000}>
        <Typography variant="h5" className={classes.subtitle}>
          Choose your preferred option
        </Typography>
      </Fade>

      {/* Buttons with staggered fade animations */}
      <Box className={classes.buttonContainer}>
        <Fade in={true} timeout={1200}>
          <Button
            variant="contained"
            size="large"
            className={classes.viewButton}
            onClick={handleView}
            startIcon={<VisibilityIcon className={classes.icon} />}
          >
            View Resume
          </Button>
        </Fade>

        <Fade in={true} timeout={1400}>
          <Button
            variant="contained"
            size="large"
            className={classes.downloadButton}
            onClick={handleDownload}
            startIcon={<GetAppIcon className={classes.icon} />}
          >
            Download Resume
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};