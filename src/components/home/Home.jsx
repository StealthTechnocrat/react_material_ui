import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { adURL } from "../../utils/data";
import MidleSec from "./MidleSec";

const useStyle = makeStyles(() =>
  createStyles({
    contaner: {
      padding: 10,
      background: "#f2f2f2",
    },
  })
);
const wraper={
    margin:'10px 0 0 10px',
    background:'#f1f3f6',
    padding:5

}

const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <NavBar />
      <Box className={classes.contaner}>
        <Banner />
        <Box style={{display:'flex'}}>
          <Box style={{width:'80%', background:'#f1f3f6',marginTop:'5px'}}>
            <Slide timer={true} title='Deal of the day'/>
          </Box>
          <Box style={wraper}>
            <img style={{width:'240px',padding:'3px'}}src={adURL} alt="" />
          </Box>
        </Box>
        <MidleSec/>
      <Slide timer={false} title={`Men's Footwear`}/>
      <Slide timer={false} title={`Top Picks On Men's Clothing`}/>
        <Slide timer={false} title='Top Offers On'/>
        <Slide timer={false} title={`Deal of Headphones & Speakers day`}subTitle={`Devices and Accessories`}/>
        <Slide timer={false} title={`Wedding Gifting Range`}/>
        <Slide timer={false} title={`Trending Offers`}/>
        <Slide timer={false} title={`Hand-picked Wedding Essentials`}/>
        <Slide timer={false} title={`Best selling Phones`}/>
      </Box>
    </div>
  );
};

export default Home;
