import { useRouter } from "next/router";
import Layout from "../components/layout";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import ModalFilters from "../components/FiltersModal/Modal";
import OrderSelect from "../components/OrderSelect";
import { useState } from "react";
import { IoMdOptions } from "react-icons/io";
const Store = ({ products }) => {
  const router = useRouter();
  const { name } = router.query;
  const [activeFiltersModal, setActiveFiltersModal] = useState(false);

  return (
    <>
      <Layout>
        {/* [count] resultados en [name] */}
        <section className="main">
          <div className="mt-4 flex justify-between items-center gap-6 max-sm:flex-col max-sm:">
            {name && (
              <h2 className="text-lg text-fondo-300 font-bold max-sm:self-start">
                Resultados para &quot;{name.split("-").join(" ")}&quot;
              </h2>
            )}
            <div className="flex gap-4 max-sm:w-full max-sm:justify-between">
              <button
                onClick={() => setActiveFiltersModal((state) => !state)}
                className="filter_btn"
              >
                <p>Filters</p>
                <IoMdOptions />
              </button>
              <OrderSelect />
            </div>
          </div>
          <hr className="my-4" />
          <div className="bg-zinc-100 w-full">
            <div className="flex flex-col gap-y-10 items-center py-10">
              {products.map((product) => (
                <Card key={product.id} style="wider" product={product} />
              ))}
            </div>
          </div>
        </section>
        <ModalFilters
          active={activeFiltersModal}
          setActive={setActiveFiltersModal}
        />
      </Layout>
    </>
  );
};

export default Store;

export async function getServerSideProps() {
  const products = await fetch("http://localhost:3000/api/get/product").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
