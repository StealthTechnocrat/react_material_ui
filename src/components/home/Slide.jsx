import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { createStyles, makeStyles } from "@mui/styles";
import { products, timerURL } from "../../utils/data";
import { Typography, Box, Button } from "@mui/material";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles(() =>
  createStyles({
    component: {
      padding: 10,
      marginTop: 12,
      background: "#ffffff",
      justifyContent: "space-between",
    },
    image: {
      height: 150,
    },
    deal: {
      fontSize: "22px",
      padding: "15px 20px",
      display: "flex",
      borderBottom: "1px solid rgba(0,0,0,.1)",
    },
    dealText: {
      fontSize: 24,
    },
    dealsubText: {
      fontSize: 14,
      color: "#b2b2b2",
      fontWeight: 400,
    },
    dealimg: {
      width: 24,
      marginLeft: 20,
      marginTop: 7,
    },
    countdown: {
      marginLeft: 10,
      marginTop: 7,
      fontSize: 16,
      color: "#7f7f7f",
    },
    container: {
      marginTop: 10,
    },
  })
);
const buttonstyle = {
  marginLeft: "auto",
  borderRadius: "2px",
  backgroundColor: "#2874f0",
  fontSize: "13px",
};
const shortTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#212121",
};
const discount = {
  fontSize: "14px",
  color: "green",
};
const tagline = {
  fontSize: "14px",
  color: "#212121",
  opacity: "0.6",
};
const warper = {
  padding: "25px 15px",
};

const Slide = ({ timer, title, subTitle }) => {
  const classes = useStyle();
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span className={classes.countdown}>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Box style={{ display: "flex" }}>
          <Box>
            <Typography
              className={classes.dealText}
              style={{ fontWeight: "600", fontSize: 24 }}
            >
              {title}
            </Typography>
            <Typography className={classes.dealsubText}style={{lineHeight:'.4'}}>{subTitle}</Typography>
          </Box>
        </Box>
        {timer && (
          <>
            <img className={classes.dealimg} src={timerURL} alt="" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </>
        )}
        <Button variant="contained" style={buttonstyle}>
          View All
        </Button>
      </Box>
      <Carousel
        draggable={false}
        centerMode={true}
        swipeable={false}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((pro) => (
          <Box textAlign="center" style={warper} key={pro.id}>
            <img className={classes.image} src={pro.url}alt="" />
            <Typography style={shortTitle}>{pro.title.shortTitle}</Typography>
            <Typography style={discount}>{pro.discount}</Typography>
            <Typography style={tagline}>{pro.tagline}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
