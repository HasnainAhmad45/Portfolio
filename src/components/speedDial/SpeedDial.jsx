import React from "react";
import { styled } from '@mui/material/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import Resume from "../../settings/resume.json";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(6),
  right: theme.spacing(6),
}));

export const SpeedDials = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => { setOpen(false); };
  const handleOpen = () => { setOpen(true); };
  const actionIcons = Resume.basics.profiles.map((action) => (
    <SpeedDialAction
      key={action.network.toLowerCase()}
      icon={<i className={action.x_icon} style={{ color: '#575757' }}></i>}
      tooltipTitle={action.network}
      onClick={handleClose}
      href={action.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    />
  ));
  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial"
      hidden={false}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="down"
    >
      {actionIcons}
    </StyledSpeedDial>
  );
};
