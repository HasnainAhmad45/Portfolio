import React from 'react';
import { Box } from '@mui/material';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialButton } from '../components/content/SocialButton';
import { SideNavbar } from '../components/nav/SideNavbar';
import { About } from '../components/about/About';
import { Content } from '../components/content/Content';

export const Home = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <DisplacementSphere />
        <SideNavbar />
        <Content />
        <Box
          sx={{
            position: 'fixed',
            top: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
            right: { xs: '0.75rem', sm: '1rem', md: '2rem' },
            zIndex: 101,
            display: 'flex',
            gap: { xs: 0.5, sm: 0.75, md: 1 },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <ThemeToggle />
          <SocialButton />
        </Box>
      </Box>
      <About />
    </>
  );
};
