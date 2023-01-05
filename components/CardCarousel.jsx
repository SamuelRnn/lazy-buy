import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const CardCarousel = ({ product }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1313 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop_mini: {
      breakpoint: { max: 1312, min: 999 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 998, min: 665 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Carousel
        className="carousel-i"
        responsive={responsive}
        draggable={true}
        infinite={true}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};

export default CardCarousel;
