import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const CardCarousel = ({ productArray }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1313 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    desktop_mini: {
      breakpoint: { max: 1312, min: 999 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 998, min: 665 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Carousel
        className="carousel-i"
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        shouldResetAutoplay={false}
        autoPlaySpeed={4500}
        pauseOnHover={true}
      >
        {productArray.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </Carousel>
    </motion.div>
  );
};

export default CardCarousel;
