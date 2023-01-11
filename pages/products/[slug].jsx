import Layout from "../../components/Layout";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

const Detail = ({ product }) => {
  const router = useRouter();

  return (
    <Layout title={"Lazy Buy | " + product.name}>
      <br />
      <br />
      <br />
      <button onClick={() => router.back()}>Back</button>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                width={400}
                height={400}
                alt="Les Paul"
                src={product.mainImage.url}
                className="object-cover w-full aspect-square rounded-xl"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                  <h1 className="text-2xl font-bold">{product.name}</h1>

                  <p className="mt-0.5 text-sm text-zinc-700">
                    {product.company.name}
                  </p>

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

                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{product.description}</p>
                    </div>

                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Leer más...
                    </span>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>
                    The Ordinary es una marca que ofrece una variedad de
                    productos para el cuidado de la piel facial. Si buscas
                    protegerla y mantenerla en forma, esta puede ser una buena
                    opción. Libre de crueldad Este producto es elaborado sin
                    lastimar a ningún animal. Es vegano Este producto es
                    realizado en base a elementos naturales de origen vegetal.
                  </p>
                </div>
              </details>

              <form className="mt-8">
                {/* //add props extra to model  */}
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

export async function getServerSideProps({ res, query: { slug } }) {
  const { product, $disconnect } = new PrismaClient();
  const fetchedProduct = await product.findUnique({
    where: { slug },
    include: {
      company: true,
    },
  });
  if (!fetchedProduct) {
    return {
      notFound: true,
    };
  }
  fetchedProduct.updatedAt = toString(fetchedProduct.updatedAt);
  fetchedProduct.createdAt = toString(fetchedProduct.createdAt);
  fetchedProduct.company.createdAt = toString(fetchedProduct.company.createdAt);
  fetchedProduct.company.updatedAt = toString(fetchedProduct.company.updatedAt);
  return {
    props: {
      product: fetchedProduct,
    },
  };
}
