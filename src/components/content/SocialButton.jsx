import React, { useState } from 'react';
import { Link, Tooltip, IconButton, Popover, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Resume from '../../settings/resume.json';

const SocialButtonWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '30px',                         // CENTER INSIDE 60PX HEADER
  right: theme.spacing(2.5),
  transform: 'translateY(-50%)',       // ADJUST FOR BUTTON HEIGHT
  zIndex: 101,

  '@media (max-width: 600px)': {
    top: '32px',                       // SMALL TWEAK FOR MOBILE NAV HEIGHT
  },
}));


const StyledIconButton = styled(IconButton)(({ theme, open }) => ({
  height: '2.8rem',
  width: '2.8rem',
  padding: '0.6rem',
  borderRadius: '50%',
  background: 'inherit',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.25s ease',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',

  ...(open && {
    background: 'rgba(236,112,76,0.2)',
    '& .MuiSvgIcon-root': {
      color: '#ec704c',
      transform: 'rotate(45deg)',
    },
  }),

  '&:hover': {
    background: 'rgba(236,112,76,0.2)',
    '& .MuiSvgIcon-root': { color: '#ec704c' },
  },

  '@media (max-width: 450px)': {
    height: '2.4rem',
    width: '2.4rem',
    padding: '0.5rem',
  },

  '@media (max-width: 360px)': {
    height: '2.2rem',
    width: '2.2rem',
    padding: '0.4rem',
  },
}));

// Update iconStyle to include smooth rotation
const iconStyle = {
  fontSize: '1.9rem',
  color: '#575757',
  transition: 'transform 0.25s ease, color 0.25s ease',
  transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
};


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
  fontWeight: 600,
  fontSize: '1.05rem',
  color:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.text.primary, 0.85)
      : theme.palette.text.primary,

  '&:hover': {
    background:
      theme.palette.mode === 'dark'
        ? '#252c36'
        : 'rgba(236,112,76,0.07)',
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
  opacity: 0.96,
}));

/* --------------------------- SOCIAL BUTTON COMPONENT --------------------------- */

export const SocialButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  const iconStyle = {
    fontSize: '1.9rem',          // FIXED ICON SIZE FOR CONSISTENCY
    color: '#575757',
    transition: '0.3s',
  };

  const socialItems =
    Resume.basics?.profiles?.map((item) => (
      <SocialLink
        href={item.url}
        key={item.network.toLowerCase()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClose}
      >
        <SocialIcon className={item.x_icon || 'fab fa-' + item.network.toLowerCase()} />
        <SocialText>{item.network}</SocialText>
      </SocialLink>
    )) || [];

  return (
    <SocialButtonWrapper>
      <Tooltip
        title={open ? 'Close' : 'Social Links'}
        placement="left"
        TransitionComponent={Zoom}
      >
        <StyledIconButton onClick={handleClick} open={open}>
          <AddIcon sx={iconStyle} />
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
          {socialItems.length ? (
            socialItems
          ) : (
            <SocialLink>
              <SocialIcon className="fab fa-github" />
              <SocialText>GitHub</SocialText>
            </SocialLink>
          )}
        </PopoverContent>
      </StyledPopover>
    </SocialButtonWrapper>
  );
};
