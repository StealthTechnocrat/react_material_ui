import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../utils/data';

const useStyle=makeStyles(()=>
createStyles({
    image:{
        height:"280px",
        background:"#fffff"
    },
    navbutton:{
        cursor:'pointer',
        '&:hover':{
            color:'white',
            opacity: "unset !important",
        }
    }
    }));

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel className={classes.navbutton}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible	={true}
        navButtonsProps={{
            style:{background:'#ffffff',
            color:'#494949',
            borderRadius:0,
            margin:0,
            height:'100px',
            justifyContent:'center'
    }
        }}>
            {bannerData.map((banner,index)=>(<img className={classes.image} key={index+1} src={banner} alt=''/>))}
        </Carousel>
    )
}

export default Banner;
