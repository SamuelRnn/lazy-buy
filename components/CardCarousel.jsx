import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

// const mockup =   [
//   {
//     "id": "1",
//     "name": "Zapatillas Nikedidas",
//     "description": "Zapatillas bonitas a buen precio",
//     "price": 400.3,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncEWFu1dZHfHQPbhKkmCAXVNiJkvtWuenxw&usqp=CAU",
//     "stock": 4,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "2",
//     "name": "Zapatillas Nike 1",
//     "description": "Zapatillas bonitas",
//     "price": 600.3,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgEOLLp6v3VoqmMy3-pVyq7dj3lf4r0lzw&usqp=CAU",
//     "stock": 6,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "3",
//     "name": "Zapatillas Nike 2",
//     "description": "Zapatillas bonitas y baratas",
//     "price": 700,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgEOLLp6v3VoqmMy3-pVyq7dj3lf4r0lzw&usqp=CAU",
//     "stock": 2,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "4",
//     "name": "Zapatillas Nike 3",
//     "description": "Zapatillas bonitas y comodas",
//     "price": 750,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqtVi8gilXSQGKhQF7Q7GKLOQQEn1H3zlkQ&usqp=CAU",
//     "stock": 2,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "5",
//     "name": "Zapatillas Nike 4",
//     "description": "Zapatillas bonitas y rapidas",
//     "price": 760,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncEWFu1dZHfHQPbhKkmCAXVNiJkvtWuenxw&usqp=CAU",
//     "stock": 2,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "6",
//     "name": "Zapatillas Nike 5",
//     "description": "Zapatillas bonitas y rapidas",
//     "price": 900,
//     "mainImage": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-zapatillas-GjGXSP.png",
//     "stock": 2,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "7",
//     "name": "Ojotas",
//     "description": "Ojotas bonitas y rapidas",
//     "price": 980,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xj_bkt9I7QWsfdFenV-bHTOMt95XjPXAEbXkwyeR52Kf7h2LQShUk3W92yGvFAKJkUo&usqp=CAU",
//     "stock": 2,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   },
//   {
//     "id": "8",
//     "name": "Ojotas Nike 1",
//     "description": "Ojotas bonitas y comodas",
//     "price": 300,
//     "mainImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ9IGy4VRsq_bW_jYGfpo3yMbLkaw6R8jRw&usqp=CAU",
//     "stock": 1,
//     "isActive": true,
//     "companyId": "9986564e-f536-43ae-8f59-cb5300962cdb"
//   }
// ]



const CardCarousel = ({ products }) => {

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
        {
          products.map(p => <Card key={p.id} product={p} style="wider"/>)
        }
      </Carousel>
    </div>
  );
};

export default CardCarousel;
