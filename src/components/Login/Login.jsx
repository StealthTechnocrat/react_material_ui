import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { llogo } from "../../utils/data";
import { authenticateSignUp ,authenticateLogin} from "../../service/api";

const useStyle = makeStyles(() =>
  createStyles({
    container: {
      height: "80vh",
      width: "100vh",
    },
    image: {
      backgroundImage: `url(${llogo})`,
      background: "#2874f0",
      height: "80vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center 84%",
      width: "40%",
      "& > * ": {
        color: "#fff",
      },
    },
    text: {
      fontSize: 18,
      color: "#dbdbdb",
      marginTop: 20,
      lineHeight: "150%",
    },
    login: {
      display: "flex",
      flex: 1,
      padding: "36px 35px 16px",
      background: "#fff",
      flexDirection: "column",
      "& > * ": {
        marginTop: "20px",
      },
    },
    textField: {
      padding: " 8px 10px 10px 0",
      width: "100%",
      color: "#000",
      fontSize: "inherit",
      background: "#fff",
      border: "none",
      borderBottom: "1px solid #e0e0e0",
    },
    condition: {
      color: "#878787",
      "& > * ": {
        color: "#2874f0",
      },
    },
    button: {
      width: "100%",
      marginTop: 20,

      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
      border: "none",
      color: "#fff",
    },
    createAcc: {
      color: "#2874f0",
      cursor: "pointer",
    },
    error:{
      fontSize:10,
      color:'red',
      fontWeight:'600'
    }
  })
);
const buttonLogin = {
  width: "100%",
  background: "#fb641b",
  marginTop: "20px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  border: "none",
  color: "#fff",
  height: "48px",
};
const request = {
  width: "100%",
  height: "48px",
  marginTop: "20px",
  lineHeight: "180%",
  color: " #2874f0",
  backgroundColor: "#fff",
  fontSize: "15px",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
};
const text = {
  ontSize: "18px",
  color: "#dbdbdb",
  lineHeight: "150%",
};

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: `Looks like you're new here!`,
    subHeading: "Sign up with your mobile number to get started",
  },
};
const signupInitial = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialn = {
  username:'',
  password:''
}

const Login = ({ open, setOpen, setValue }) => {
  const classes = useStyle();
  const [account, setAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitial);
  const [login, setLogin] = useState(loginInitialn);
  const [error, setError] = useState(false)

  const handleClose = () => {
    setOpen(false);
    setAccount(initialValue.login);
  };

  const toogleAccount = () => {
    setAccount(initialValue.signup);
  };
  const signupUser = async () => {
    let response = await authenticateSignUp(signup);
    if (response) return;
    handleClose();
    setValue(signup.username)
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response) {
    setError(true);
    return;
    }
    handleClose();
    setValue(login.username);
  }
   const onInputChange = (e)=>{
     setSignup({...signup,[e.target.name]: e.target.value})
    console.log(signup)
    }
    const onLoginInputChange = (e)=>{
      setLogin({...login,[e.target.name]: e.target.value})
     console.log(login)
     }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="none" padding="0">
      <DialogContent
        style={{ padding: "0" }}
        className={classes.container}
      >
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Box style={{ padding: "45px 35px" }}>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={text}>{account.subHeading}</Typography>
            </Box>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
              onChange ={(e) =>onLoginInputChange(e)}
                className={classes.textField}
                label="Enter Email/Mobile number"
                type="text"
                name="username"
                variant="standard"
              />
              <TextField
              onChange ={(e) =>onLoginInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Password"
                type="password"
                name="password"
                variant="standard"
              />
              {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
              <Typography
                className={classes.condition}
                style={{ fontSize: "12px", marginTop: "20px" }}
              >
                By continuing, you agree to Flipkart's <span>Terms of Use</span>{" "}
                and <span>Privacy Policy</span>.
              </Typography>
              <Button style={buttonLogin} onClick={()=> loginUser()}>Login</Button>
              <Typography
                style={{
                  width: "100%",
                  marginTop: "10px",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                OR
              </Typography>
              <Button style={request}>Request OTP</Button>
              <Typography
                onClick={() => toogleAccount()}
                className={classes.createAcc}
                style={{
                  marginTop: "auto",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            ////////////////Sign Up Page//////////////////////////////////////////////Sign up page //////////////////////////////////

            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                label="Enter Firstname"
                type="text"
                name="firstname"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Enter Lastname"
                type="text"
                name="lastname"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Enter Usernamer"
                type="text"
                name="username"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Enter Email"
                type="text"
                name="email"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Password"
                type="password"
                name="password"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                className={classes.textField}
                style={{ marginTop: "20px" }}
                label="Enter Phone number"
                type="number"
                name="phone"
                variant="standard"
              />
              <Button style={buttonLogin} onClick={() => signupUser()}>
                Login
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
