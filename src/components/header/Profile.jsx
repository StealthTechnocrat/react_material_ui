import React, { useState } from "react";
import { Typography, Menu, MenuItem, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomIcon from "./custom/CustomIcon";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const Logout = () => {
      setAccount('')
  }
  const typography = {
    display: "block",
  };
  return (
    <div>
      <Typography style={{ marginTop: "4px" }} onClick={handleOpen}>
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        style={{ marginTop: "15px" }}
      >
        <MenuItem onClick={()=>{handleClose() ; Logout()}}>
        <Box style={typography}>
            <CustomIcon text={'Profile'} icon={<AccountBoxIcon/>}/>
          <CustomIcon text={'Logout'} icon={<LogoutIcon/>}/>
          </Box>
        
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
