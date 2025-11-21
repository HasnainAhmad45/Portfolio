import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, Tooltip, IconButton, Zoom } from '@mui/material';
import Resume from '../../settings/resume.json';

const SocialIconsWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(6),
  right: theme.spacing(6),
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  height: '2.5rem',
  width: '2.5rem',
  display: 'block',
  marginBottom: theme.spacing(2),
}));
const StyledIcon = styled('i')(({ theme }) => ({
  fontSize: '1.25rem',
}));

export const SocialIcons = () => {
  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='left'
        TransitionComponent={Zoom}
      >
        <StyledIconButton
          color='inherit'
          aria-label={socialItem.network}
        >
          <StyledIcon className={socialItem.x_icon} />
        </StyledIconButton>
      </Tooltip>
    </Link>
  ));
  return <SocialIconsWrapper>{socialItems}</SocialIconsWrapper>;
};
