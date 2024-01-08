import React from 'react'
import { Typography,Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import {navData} from '../../utils/data';

const useStyle = makeStyles(()=>
createStyles({
    component:{
        display:'flex',
        margin:'55px 25px 0 25px',
        justifyContent:'space-between',

    },
    conainer:{
        textAlign:'center',
        cursor:'pointer',
        padding:'12px 8px',
        width:'100%'
    },
    image:{
        width:64,
    },
    text:{
        textAlign:'center',
        fontWeight:'600',
        hover:'red'
    }
}))

const NavBar = () => {
    const classes=useStyle();
    return (
       <Box className={classes.component}>
           {navData.map((nav,i )=> (
               <Box className={classes.conainer} key={i+1}>
                   <img className={classes.image} src={nav.url} alt="" />
                   <Typography className={classes.text}>{nav.text}</Typography>
               </Box> 
           ))}
       </Box>
    )
}

export default NavBar;
