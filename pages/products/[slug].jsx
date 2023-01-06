import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

// const mock_product = [
//   {
//     id: "1",
//     name: "Zapatillas Nikedidas",
//     description: "Zapatillas bonitas a buen precio",
//     price: 400.3,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncEWFu1dZHfHQPbhKkmCAXVNiJkvtWuenxw&usqp=CAU",
//     stock: 4,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//     color: "gris"
//   },
//   {
//     id: "2",
//     name: "Zapatillas Nike 1",
//     description: "Zapatillas bonitas",
//     price: 600.3,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgEOLLp6v3VoqmMy3-pVyq7dj3lf4r0lzw&usqp=CAU",
//     stock: 6,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//     color: "naranja"
//   },
//   {
//     id: "3",
//     name: "Zapatillas Nike 2",
//     description: "Zapatillas bonitas y baratas",
//     price: 700,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwgEOLLp6v3VoqmMy3-pVyq7dj3lf4r0lzw&usqp=CAU",
//     stock: 2,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//     color: "naranja"
//   },
//   {
//     id: "4",
//     name: "Zapatillas Nike 3",
//     description: "Zapatillas bonitas y comodas",
//     price: 750,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqtVi8gilXSQGKhQF7Q7GKLOQQEn1H3zlkQ&usqp=CAU",
//     stock: 2,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//     color: "verde"
//   },
//   {
//     id: "5",
//     name: "Zapatillas Nike 4",
//     description: "Zapatillas bonitas y rapidas",
//     price: 760,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncEWFu1dZHfHQPbhKkmCAXVNiJkvtWuenxw&usqp=CAU",
//     stock: 2,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//   },
//   {
//     id: "6",
//     name: "Zapatillas Nike 5",
//     description: "Zapatillas bonitas y rapidas",
//     price: 900,
//     mainImage:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-zapatillas-GjGXSP.png",
//     stock: 2,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//   },
//   {
//     id: "7",
//     name: "Ojotas",
//     description: "Ojotas bonitas y rapidas",
//     price: 980,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xj_bkt9I7QWsfdFenV-bHTOMt95XjPXAEbXkwyeR52Kf7h2LQShUk3W92yGvFAKJkUo&usqp=CAU",
//     stock: 2,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//   },
//   {
//     id: "8",
//     name: "Ojotas Nike 1",
//     description: "Ojotas bonitas y comodas",
//     price: 300,
//     mainImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ9IGy4VRsq_bW_jYGfpo3yMbLkaw6R8jRw&usqp=CAU",
//     stock: 1,
//     isActive: true,
//     companyId: "9986564e-f536-43ae-8f59-cb5300962cdb",
//   },
// ];

const Detail = () => {

  const router = useRouter();
  const { slug } = router.query;

  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);


  return (
  
    <Layout title={"Lazy Buy | " + products.title}>
      
      <br />
      <br />
      <br />

      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                width={300}
                height={300}
                alt={products.title}
                src={products.image}
                className="object-contain object-center w-full aspect-square rounded-xl"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <Image
                  width={5000}
                  height={2500}
                  alt={products.title}
                  src={products.image}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt={products.title}
                  src={products.image}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt={products.title}
                  src={products.image}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt={products.title}
                  src={products.image}
                  className="object-cover w-full aspect-square rounded-xl"
                />
              </div>
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-rose-500 bg-fondo-200 px-3 py-0.5 text-xs font-medium tracking-wide ">
                Pre Order
              </strong>

              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{products.title}</h1>

                  <p className="mt-0.5 text-sm text-zinc-700">{products.title}</p>

                  <div className="mt-2 -ml-0.5 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">${products.price}</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{products.description}</p>
                    </div>
                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Leer más...
                    </span>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>
                      {products.description}
                  </p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>
                </fieldset>

                <div className="flex mt-8">
                  <div>
                    {/*  <input
                      type="number"
                      value={cantidad}
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    /> */}
                  </div>

                  <button className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-fondo-300 rounded hover:bg-fondo-500 active:scale-75 transition-all ease-out">
                    Agregar al carrito
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Detail;

// export async function getServerSideProps({ res, query: { slug } }) {
//   const { product, $disconnect } = new PrismaClient();
//   const fetchedProduct = await product.findUnique({
//     where: { slug },
//     include: {
//       company: true,
//     },
//   });
//   if (!fetchedProduct) {
//     return {
//       notFound: true,
//     };
//   }
//   fetchedProduct.updatedAt = toString(fetchedProduct.updatedAt);
//   fetchedProduct.createdAt = toString(fetchedProduct.createdAt);
//   fetchedProduct.company.createdAt = toString(fetchedProduct.company.createdAt);
//   fetchedProduct.company.updatedAt = toString(fetchedProduct.company.updatedAt);
//   return {
//     props: {
//       product: fetchedProduct,
//     },
//   };
// }
