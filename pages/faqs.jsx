import Layout from "../components/MainLayout";
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
        <div className="flex justify-center bg-fondo-25">
          <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-fondo-25">
            <h2 className="font-semibold text-2xl lg:text-4xl lg:leading-9 md:leading-7 leading-9 text-fondo-500">
              Frequently Asked Questions
            </h2>
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
                    <h3 className="font-semibold text-xl  leading-5 text-fondo-500">
                      Shipments
                    </h3>
                    <button
                      aria-label="too"
                      className="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                    We are covering all major countries in the world. The
                    shipment leaves from Argentina since our campus
                    <div
                      className="flex  justify-center items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(8);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        What means of transportation do you use to do the
                        shipments?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800s"
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
                        We manage shipments with motorcycles and vans of
                        different marks.
                      </p>
                    </div>
                    <div
                      className="flex  justify-end items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(9);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        What happens if the customer who receives the package
                        does not Do you find when the delivery man arrives at
                        your home?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        The delivery person will make every effort to
                        communicate with the client. In case of not being able
                        to, you can perform another visit at another time of day
                        or return the package to the source address. (This
                        generates a penalty at the cost of Shipping).
                      </p>
                    </div>
                    <div
                      className="flex  justify-self-auto items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(10);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        If the shipment is delivered late, can I receive a
                        compensation?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        Carriers do not guarantee delivery times in the strict
                        sense. When they guarantee a term of delivery means that
                        they undertake to put into practice all means to respect
                        the deadline announced, and that in case of delay
                        attributable to them, can reimburse part or all of the
                        expenses delivery according to the accepted offer.
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
                    <h3 className="font-semibold text-xl   leading-5 text-fondo-500">
                      Returns
                    </h3>
                    <button
                      aria-label="too"
                      className="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        How do I return a product?{" "}
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        Contact one of our advisors or reach a agreement with
                        the seller.{" "}
                      </p>
                    </div>
                    <div
                      className="flex  justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(12);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        How long do I have to return a product?{" "}
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        You have up to 30 days after making your buy.
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
                    <h3 className="font-semibold text-xl leading-5 text-fondo-500">
                      Changes
                    </h3>
                    <button
                      aria-label="too"
                      class="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        Is it possible to make changes?{" "}
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        If your change is due to a purchase made in our Lazzy
                        Buy online store; you should contact the LAZZYBUY
                        customer service area, within the (10) 10 days from
                        receiving your order.
                      </p>
                    </div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(6);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        Is there a deadline for returns?{" "}
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        Yes, you will have a maximum period of 10 business days
                        to make your request for product change.
                      </p>
                    </div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        openAnsSection(7);
                      }}
                    >
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        Can I make more than one change?{" "}
                      </h2>
                      <button
                        aria-label="too"
                        class="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        Yes, our rules allow you to perform more than one change
                        of product, but the third change will be charged a
                        additional fee.
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
                    <h3 className="font-semibold text-xl  leading-5 text-fondo-500">
                      Tracing
                    </h3>
                    <button
                      aria-label="too"
                      class="text-gray-800 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                      <h2 className="font-semibold text-xl  my-2 leading-5 text-fondo-500">
                        Is it possible to track in real time the package I
                        expect?
                      </h2>
                      <button
                        aria-label="too"
                        class="text-zinc-700 text-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                        Yes, of course. You have the option from the website de
                        Carryt register and add the code to track in real time
                        the package you will receive.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-7 bg-gray-200" />
              </div>
            </div>
          </div>

          <BsQuestionCircleFill className="text-[350px] text-fondo-400 bg-fondo-25 my-[8%] mt-20 mr-20" />
        </div>
      </Layout>
    </div>
  );
};

export default Faqs;
