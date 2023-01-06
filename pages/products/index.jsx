import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import ModalFilters from "../../components/FiltersModal/ModalFilters";
import OrderSelect from "../../components/OrderSelect";
import { useState, useEffect } from "react";
import { IoMdOptions } from "react-icons/io";


// const mock_product =   [
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


const Store = () => {

  const router = useRouter();
  const { name } = router.query;
  const [activeFiltersModal, setActiveFiltersModal] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=20`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res)
      });
  }, []);


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
              {products.map((p) => (
                <Card key={p.id} style="wider" product={p} />
              ))}
            </div>
          </div>
        </section>
        <ModalFilters
          active={activeFiltersModal}
          setActive={setActiveFiltersModal}
          products={products}
          setProducts={setProducts}
        />
      </Layout>
    </>
  );
};

export default Store;

// export async function getServerSideProps() {
//   const products = await fetch("http://localhost:3000/api/get/product").then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       products,
//     },
//   };
// }
