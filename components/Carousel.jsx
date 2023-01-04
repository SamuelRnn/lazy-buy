import Card from "./Card";

const Carousel = ({ products }) => {
  return (
    <div className="flex w-full justify-between">
      <button className="carousel_btn">{"<"}</button>
      <div className="flex overflow-hidden gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="carousel_btn">{">"}</button>
    </div>
  );
};

export default Carousel;
