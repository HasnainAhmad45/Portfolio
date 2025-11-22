import React from 'react';
import { Contact as ContactForm } from '../components/contact/Contact';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SideNavbar } from '../components/nav/SideNavbar';
import { SocialButton } from '../components/content/SocialButton';

export const Contact = () => {
  return (
    <>
      <SideNavbar />
      <DisplacementSphere />
      <SocialButton/>
      <ThemeToggle />
      <main style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ContactForm />
      </main>
    </>
  );
};
