import Layout from "../components/layout.jsx";
import Banner from "../components/Banner.jsx";
import CardCarousel from "../components/CardCarousel.jsx";

export default function Home() {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="main home_titles">Nuevos productos</h1>
        <CardCarousel />
        <div className="py-12">
          <Banner />
        </div>
        <h1 className="main home_titles">Ofertas del día</h1>
        <CardCarousel />
        <br />
        <hr className="main my-4 text-zinc-300" />
        <br />
        <h1 className="main home_titles">{"Descuentos!(?"}</h1>
        <CardCarousel />
      </div>
    </Layout>
  );
}
