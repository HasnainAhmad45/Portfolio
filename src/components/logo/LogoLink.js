import React from "react";
import { styled } from '@mui/material/styles';
import { Link, Tooltip, Zoom } from '@mui/material';
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

const LogoWrapper = styled(Link)(({ theme }) => ({
  position: 'fixed',
  width: '50px',
  height: '50px',
  top: theme.spacing(6),
  left: theme.spacing(6),
  boxShadow:
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  borderRadius: '50%',
}));

export const LogoLink = () => {
  return (
    <Tooltip
      title={Resume.basics.name}
      placement="right"
      TransitionComponent={Zoom}
    >
      <LogoWrapper
        variant="h6"
        href={Resume.basics.url}
        underline="none"
        color="inherit"
        noWrap
      >
        <Logo />
      </LogoWrapper>
    </Tooltip>
  );
};
