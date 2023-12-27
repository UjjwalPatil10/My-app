import React from "react";
import Carousel from "react-bootstrap/Carousel";

// import Style from "./RBCarousel.module.css"

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  Carousel: {
    height: "80vh",
    "& .carousel-inner": {
      // here we do nested styling
      height: "100%",
    },
  },
});
const RBCarousel = () => {
  const classes = useStyles(); //in useStyles(data) we can pass data props,state,anything
  return (
    <>
      <h2>Carousel Slider</h2>
      <Carousel className={classes.Carousel}>
        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100"
            src="images/bike-image.png"
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem yakjk jffgj dhfgkkj</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100"
            src="images/car-image.png"
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem yakjk jffgj dhfgkkj</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100"
            src="images/bike-image.png"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem yakjk jffgj dhfgkkj</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default RBCarousel;
