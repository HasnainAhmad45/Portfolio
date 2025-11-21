import React, { useState } from 'react';
import { Link, Tooltip, IconButton, Popover, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Resume from '../../settings/resume.json';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const SocialButtonWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(1.5),
  right: theme.spacing(2),
  zIndex: 101,
}));
const StyledIconButton = styled(IconButton)(({ theme, open }) => ({
  height: '2.5rem',
  width: '2.5rem',
  padding: '0.5rem',
  background: 'inherit',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    height: '2.2rem',
    width: '2.2rem',
    padding: '0.4rem',
  },
  '@media (max-width:400px)': {
    height: '2rem',
    width: '2rem',
    padding: '0.3rem',
  },
  ...(open && {
    background: 'rgba(236, 112, 76, 0.2)',
    transform: 'rotate(45deg)',
    '& .MuiSvgIcon-root': { color: '#ec704c' },
  }),
  '&:hover': {
    background: 'rgba(236, 112, 76, 0.2)',
    transform: 'rotate(90deg)',
    '& .MuiSvgIcon-root': { color: '#ec704c' },
  },
}));
const StyledPopover = styled(Popover)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
}));
const PopoverContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  minWidth: '200px',
}));
const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  color: theme.palette.mode === 'dark'
    ? alpha(theme.palette.text.primary, 0.85)
    : theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '1.05rem',
  opacity: 0.97,
  letterSpacing: 0.05,
  background: 'none',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? '#252c36'
      : 'rgba(236, 112, 76, 0.07)',
    color: '#ec704c',
  },
}));
const SocialIcon = styled('i')(({ theme }) => ({
  fontSize: '1.25rem',
  marginRight: theme.spacing(1.5),
}));
const SocialText = styled('span')(({ theme }) => ({
  fontSize: '1.05rem',
  fontWeight: 600,
  color: theme.palette.mode === 'dark'
    ? alpha(theme.palette.text.primary, 0.93)
    : alpha(theme.palette.text.primary, 0.98),
  opacity: 0.96,
  letterSpacing: 0.02,
}));

export const SocialButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const socialItems = Resume.basics?.profiles?.map((socialItem) => (
    <SocialLink
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      onClick={handleClose}
    >
      <SocialIcon className={socialItem.x_icon || 'fab fa-' + socialItem.network.toLowerCase()} />
      <SocialText>{socialItem.network}</SocialText>
    </SocialLink>
  )) || [];

  // Responsive size for AddIcon
  const iconResponsive = {
    fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
    color: theme.palette.mode === 'dark' ? '#fff' : '#575757',
    transition: 'all 0.3s ease',
  };

  return (
    <SocialButtonWrapper>
      <Tooltip
        title={open ? 'Close' : 'Social Links'}
        placement='left'
        TransitionComponent={Zoom}
      >
        <StyledIconButton onClick={handleClick} open={open} aria-label='Toggle social links'>
          <AddIcon sx={iconResponsive} />
        </StyledIconButton>
      </Tooltip>
      <StyledPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <PopoverContent>
          {socialItems.length > 0 ? socialItems : (
            <SocialLink>
              <SocialIcon className='fab fa-github' />
              <SocialText>GitHub</SocialText>
            </SocialLink>
          )}
        </PopoverContent>
      </StyledPopover>
    </SocialButtonWrapper>
  );
};