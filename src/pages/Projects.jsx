import React from 'react';
import { Works } from '../components/works/Works';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { SideNavbar } from '../components/nav/SideNavbar';
import { SocialButton } from '../components/content/SocialButton';
import { ThemeToggle } from '../components/theme/ThemeToggle';

export const Projects = () => {
  return (
    <>
      <SideNavbar />
      <DisplacementSphere />
      <SocialButton/>
      <ThemeToggle/>
      <main style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Works />
      </main>
    </>
  );
};
