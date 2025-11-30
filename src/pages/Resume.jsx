import React from "react";
import { Typography, Button, Box, Fade } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';
import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { SideNavbar } from "../components/nav/SideNavbar";
import { SocialButton } from "../components/content/SocialButton";

export const Resume = () => {
  const handleView = () => {
    window.open('/Hasnain_Ahmad_Resume.pdf#toolbar=1&navpanes=1&scrollbar=1', '_blank');
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
    <Box
      sx={{
        padding: 4,
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <DisplacementSphere />
      <ThemeToggle />
      <SideNavbar />
      <SocialButton />
      <Fade in={true} timeout={1000}>
        <Typography
          variant="h5"
          sx={{ marginBottom: 2, color: 'text.secondary', fontSize: '1.1rem', fontFamily: 'Roboto Mono, monospace', fontWeight: 500 }}
        >
          Choose your preferred option
        </Typography>
      </Fade>

      <Box sx={{ marginTop: 6, display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Fade in={true} timeout={1200}>
          <Button
            variant="contained"
            size="large"
            onClick={handleView}
            startIcon={<VisibilityIcon sx={{ fontSize: '1.25rem', marginRight: 1 }} />}
            sx={{
              padding: '12px 24px',
              bgcolor: 'primary.main',
              color: 'text.primary',
              borderRadius: 1,
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
              fontFamily: 'Roboto Mono, monospace',
              boxShadow: 3,
              transition: 'all 0.5s ease',
              minWidth: 180,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              },
            }}
          >
            View Resume
          </Button>
        </Fade>

        <Fade in={true} timeout={1400}>
          <Button
            variant="contained"
            size="large"
            onClick={handleDownload}
            startIcon={<GetAppIcon sx={{ fontSize: '1.25rem', marginRight: 1 }} />}
            sx={{
              padding: '12px 24px',
              bgcolor: 'secondary.main',
              color: 'text.primary',
              borderRadius: 1,
              fontWeight: 500,
              fontSize: '1rem',
              textTransform: 'none',
              fontFamily: 'Roboto Mono, monospace',
              boxShadow: 3,
              transition: 'all 0.5s ease',
              minWidth: 180,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              },
            }}
          >
            Download Resume
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};
