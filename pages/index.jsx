import Layout from "../components/layout.jsx";
import Banner from "../components/Banner.jsx";
import Carousel from "../components/Carousel.jsx";

export default function Home() {
  return (
    <Layout>
      <br />
      <br />
      <h1 className="font-bold text-fondo-500 text-xl">New Products</h1>
      <br />
      <Carousel />
      <br />
      <br />
      <Banner />
      <br />
      <br />
      <h1 className="font-bold text-fondo-500 text-xl">Ofertas del día</h1>
      <br />
      <Carousel />
      <br />
    </Layout>
  );
}
