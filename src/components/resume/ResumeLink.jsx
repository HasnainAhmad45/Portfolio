import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Link } from '@mui/material';
import { TextDecrypt } from '../content/TextDecrypt';
import { ResumeIcon } from '../content/ResumeButton';

const FooterText = styled(Link)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(6),
  left: theme.spacing(6),
  transition: 'all 0.5s ease',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  zIndex: 50,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('md')]: {
    bottom: theme.spacing(4),
    left: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('xs')]: {
    position: 'relative',
    bottom: 'auto',
    left: 'auto',
    margin: theme.spacing(2),
    justifyContent: 'center',
  },
}));

export const ResumeLink = () => {
  return (
    <FooterText
      color='inherit'
      underline='none'
      href='http://localhost:5000/Hasnain_Ahmad_Resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </FooterText>
  );
};