import React, { useState } from 'react';
import { Link, Tooltip, IconButton, Zoom, Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Resume from '../../settings/resume.json';

const useStyles = makeStyles((theme) => ({
  socialButton: {
    position: 'fixed',
    top: theme.spacing(1.5),
    right: theme.spacing(2),
    zIndex: 101,
  },
  toggleButton: {
    height: '2rem',
    width: '2rem',
    background: 'inherit',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(236, 112, 76, 0.2)',
      transform: 'rotate(90deg)',
      '& $icon': {
        color: '#ec704c',
      },
    },
  },
  toggleButtonOpen: {
    background: 'rgba(236, 112, 76, 0.2)',
    transform: 'rotate(45deg)',
    '& $icon': {
      color: '#ec704c',
    },
  },
  icon: {
    fontSize: '1.75rem',
    color: '#575757',
    transition: 'all 0.3s ease',
  },
  popover: {
    marginTop: theme.spacing(0.5),
  },
  popoverContent: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    minWidth: '200px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: '#575757',
    '&:hover': {
      background: 'rgba(236, 112, 76, 0.1)',
      color: '#ec704c',
    },
  },
  socialIcon: {
    fontSize: '1.25rem',
    marginRight: theme.spacing(1.5),
  },
  socialText: {
    fontSize: '0.95rem',
    fontWeight: 500,
  },
}));

export const SocialButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // Check if profiles exist in resume.json
  const socialItems = Resume.basics?.profiles?.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.socialLink}
      onClick={handleClose}
    >
      <i className={`${classes.socialIcon} ${socialItem.x_icon || 'fab fa-' + socialItem.network.toLowerCase()}`}></i>
      <span className={classes.socialText}>{socialItem.network}</span>
    </Link>
  )) || [];

  return (
    <div className={classes.socialButton}>
      <Tooltip
        title={open ? 'Close' : 'Social Links'}
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          onClick={handleClick}
          className={`${classes.toggleButton} ${open ? classes.toggleButtonOpen : ''}`}
          aria-label='Toggle social links'
        >
          <AddIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.popover}
      >
        <div className={classes.popoverContent}>
          {socialItems.length > 0 ? socialItems : (
            <div className={classes.socialLink}>
              <i className={`${classes.socialIcon} fab fa-github`}></i>
              <span className={classes.socialText}>GitHub</span>
            </div>
          )}
        </div>
      </Popover>
    </div>
  );
};