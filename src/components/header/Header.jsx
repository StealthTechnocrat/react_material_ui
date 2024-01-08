import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import {logo} from "../../utils/data";
import Search from "./SearchInput";
import HeaderButton from "./Headerbutton";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: "#2874f0",
      height:56
    },
    logo: {
      width: 75,
    },
    sublogo: {
      width: 10,
      marginLeft: 4,
      height: 10,
    },
    container: {
      display: "flex",
    },
    component: {
      marginLeft: "12%",
      lineHeight: 0,
      textDecoration:'none',
      color:'#fff'
    },
    subHeading: {
      fontSize: "10px",
      fontStyle: "italic",
    },
    button: {
      color: "white",
      // background:'#fff'
    },
  })
);


const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.header}>
        <Toolbar style={{minHeight:'56px'}}>
          <Link to='/' className={classes.component}>
            <img className={classes.logo} src={logo.logoURL} alt=""/>
            <Box className={classes.container}>
              <Typography
                className={classes.subHeading}
                style={{ fontSize: "10px" }}
              >
                Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
              </Typography>
              <img className={classes.sublogo} src={logo.subURL} alt="" />
            </Box>
          </Link>
          <Search />
          <HeaderButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
