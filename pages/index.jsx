import Layout from "../components/layout.jsx";
import Banner from "../components/Banner.jsx";
import CardCarousel from "../components/CardCarousel.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <Layout>
      <div className="py-12">
        <h1 className="main home_titles">Productos más vendidos</h1>
        <CardCarousel products={products} />
        <div className="py-12">
          <Banner />
        </div>
        <h1 className="main home_titles">Ofertas del día</h1>
        <CardCarousel products={products} />
        <br />
        <hr className="main my-4 text-zinc-300" />
        <br />
        <h1 className="main home_titles">OFERTAS RELÁMPAGO</h1>
        <CardCarousel products={products} />
      </div>
    </Layout>
  );
}
