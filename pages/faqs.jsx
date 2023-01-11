import Layout from "../components/Layout";
import { BsQuestionCircleFill } from "react-icons/bs";

const Faqs = () => {
  function openAnsSection(val) {
    var p = document.getElementById("para" + val);
    var svg = document.getElementById("path" + val);

    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      p.classList.add("block");
    } else {
      p.classList.remove("block");
      p.classList.add("hidden");
    }

    if (svg.classList.contains("hidden")) {
      svg.classList.remove("hidden");
      svg.classList.add("block");
    } else {
      svg.classList.remove("block");
      svg.classList.add("hidden");
    }
  }

  return (
    <div className=" ">
      <Layout title="Lazy Buy | FAQs">
        <div className="flex justify-center bg-fondo-50">
          <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-fondo-50">
            <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-fondo-500">
              Preguntas frecuentes
            </h2>
            <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
              <div className="">
                <p className="font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 lg:w-8/12 md:w-9/12">
                  Estas son algunas de las preguntas más frecuentes de nuestros
                  valiosos clientes.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
              <div className="md:w-6/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10 ">
                {
                  //Envio
                }
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      openAnsSection(1);
                    }}
                  >
                    <h3 className="font-semibold text-xl  dark:text-white leading-5 text-fondo-500">
                      Envío
                    </h3>
                    <button
                      aria-label="too"
                      className="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => {
                        openAnsSection(1);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          openAnsSection(1);
                        }}
                      >
                        <path
                          id="path1"
                          className=""
                          d="M10 4.1665V15.8332"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="para1"
                    class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600  mt-4 w-11/12"
                  >
                    Estamos cubriendo todos los países importantes del mundo. El
                    envío sale desde Argentina ya que allí se encuentra nuestra
                    sede.
                    <div
                      className="flex  justify-center items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(8);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Qué medio de transporte utilizan para realizar los
                        envíos?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(8);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(8);
                          }}
                        >
                          <path
                            id="path8"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para8"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        Gestionamos los envíos con motos y vans de diferentes
                        marcas.{" "}
                      </p>
                    </div>
                    <div
                      className="flex  justify-end items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(9);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Qué sucede si el cliente que recibe el paquete no se
                        encuentra cuando el repartidor llega a su domicilio?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(9);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(9);
                          }}
                        >
                          <path
                            id="path9"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para9"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        El repartidor hará todo lo posible por comunicarse con
                        el cliente. En caso de no poder, puede realizar otra
                        visita en otra hora del día o regresará el paquete a la
                        dirección de origen. (Esto genera una multa al costo de
                        envío).
                      </p>
                    </div>
                    <div
                      className="flex  justify-self-auto items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(10);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        Si el envío se entrega con retraso, ¿Puedo recibir una
                        compensación?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(10);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(10);
                          }}
                        >
                          <path
                            id="path10"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para10"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        Los transportistas no garantizan los plazos de entrega
                        en sentido estricto. Cuando garantizan un plazo de
                        entrega, significa que se comprometen a poner en
                        práctica todos los medios para respetar el plazo
                        anunciado, y que en caso de retraso imputable a ellos,
                        pueden reembolsar una parte o el conjunto de los gastos
                        de envío según la oferta adoptada.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-7 bg-gray-200" />

                {
                  //Devoluciones
                }
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      openAnsSection(2);
                    }}
                  >
                    <h3 className="font-semibold text-xl dark:text-white  leading-5 text-fondo-500">
                      Devoluciones
                    </h3>
                    <button
                      aria-label="too"
                      className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => {
                        openAnsSection(2);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          openAnsSection(2);
                        }}
                      >
                        <path
                          id="path2"
                          className=""
                          d="M10 4.1665V15.8332"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="para2"
                    class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600  mt-4 w-11/12"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(11);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Cómo devuelvo un producto?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(11);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(11);
                          }}
                        >
                          <path
                            id="path11"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para11"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        Comunicate con uno de nuestro asesores o llega a un
                        acuerdo con el vendedor.{" "}
                      </p>
                    </div>
                    <div
                      className="flex  justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(12);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Cuánto tiempo tengo para devolver un producto?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(12);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(12);
                          }}
                        >
                          <path
                            id="path12"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para12"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        Tienes hasta 30 días después de haber realizado tu
                        compra.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-7 bg-gray-200" />

                {
                  //Cambios
                }
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      openAnsSection(3);
                    }}
                  >
                    <h3 className="font-semibold text-xl dark:text-white  leading-5 text-fondo-500">
                      Cambios
                    </h3>
                    <button
                      aria-label="too"
                      class="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => {
                        openAnsSection(3);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          openAnsSection(3);
                        }}
                      >
                        <path
                          id="path3"
                          d="M10 4.1665V15.8332"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="para3"
                    class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(5);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Es posible realizar cambios?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(5);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(5);
                          }}
                        >
                          <path
                            id="path5"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para5"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                      >
                        Si tu cambio obedece a una compra realizada en nuestra
                        tienda online Lazzy Buy; debes ponerte en contacto con
                        el área de servicio al cliente LAZZYBUY, dentro de los
                        (10) 10 días de haber recibido tu pedido.
                      </p>
                    </div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(6);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Existe fecha limite para las devoluciones?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(6);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(6);
                          }}
                        >
                          <path
                            id="path6"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para6"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                      >
                        Si, tedras un plazo maximo de10 días habiles para
                        realizar tu petición de cambio de producto.
                      </p>
                    </div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(7);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Puedo realizar más de un cambio?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(7);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(7);
                          }}
                        >
                          <path
                            id="path7"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para7"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                      >
                        Si, nuestras normas te permiten realizar más de un
                        cambio de producto, pero al tercer cambio se cobrará una
                        tarifa adicional.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-7 bg-gray-200" />

                {
                  //Tracking Section
                }

                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      openAnsSection(4);
                    }}
                  >
                    <h3 className="font-semibold text-xl dark:text-white  leading-5 text-fondo-500">
                      Seguimiento
                    </h3>
                    <button
                      aria-label="too"
                      class="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => {
                        openAnsSection(4);
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          openAnsSection(4);
                        }}
                      >
                        <path
                          id="path4"
                          d="M10 4.1665V15.8332"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.16602 10H15.8327"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="para4"
                    class="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
                  >
                    <div
                      className="flex  items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(13);
                      }}
                    >
                      <h2 className="font-semibold text-xl dark:text-white my-2 leading-5 text-fondo-500">
                        ¿Es posible hacer un seguimiento en tiempo real del
                        paquete que espero?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => {
                          openAnsSection(13);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            openAnsSection(13);
                          }}
                        >
                          <path
                            id="path13"
                            d="M10 4.1665V15.8332"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <p
                        id="para13"
                        class="hidden font-normal dark:text-gray-400 text-base leading-6 text-zinc-700 mt-4 w-11/12"
                      >
                        Sí, por supuesto. Tienes la opción desde la página web
                        de Carryt registrarte y agregar el código para rastrear
                        en tiempo real el paquete que recibirás.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-7 bg-gray-200" />
              </div>
            </div>
          </div>

          <BsQuestionCircleFill className="text-[350px] text-fondo-400 bg-fondo-50 my-[8%] ml-5 mr-5" />
        </div>
      </Layout>
    </div>
  );
};

export default Faqs;
