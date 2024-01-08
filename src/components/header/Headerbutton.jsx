import React, { useState, useContext } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import styled from "styled-components";
import { Box } from "@mui/system";
import { Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import {LoginContext} from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginLeft: 10,
      display: "flex",
    },
    wraper: {
      margin: "0 7% 0 auto",
      display: "flex",
      "& > *": {
        marginRight: 50,
        marginLeft: 40,
        textDecoration: "none",
        color: "#FFFFFF",
        fontSize: 12,
        alignItems: "center",
      },
    },
  })
);
const Button = styled.button`
  background-color: #fff;
  color: #2874f0;
  height: 32px;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  padding: 5px 40px;
  border: 1px solid #dbdbdb;
`;

const HeaderButton = () => {
  const [open, setOpen] = useState(false);
  const {account, setAccount} = useContext(LoginContext);
  const classes = useStyles();

  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wraper}>
      { account ? <Profile account={account} setAccount={setAccount}/> :
        <Link to=" ">
          <Button onClick={() => openLoginDialog()}>Login</Button>
        </Link>
      }
      <Link to="">
        <Typography style={{ marginTop: "5px" }}>More</Typography>
      </Link>
      <Link to="/home/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen} setValue={setAccount}/>
    </Box>
  );
};

export default HeaderButton;
