import React from "react";
import Image from "next/image";
import det from "../../public/dashdet2.png";

const HomeHeader = () => {
  return (
    <>
      <nav className="relative p-6 bg-fondo-300 container mx-auto rounded-b-3xl shadow-xl shadow-zinc-400">
        <div className="flex items-center justify-between">
          <div className="pt-2 flex items-center space-x-6">
            <Image
              className="rounded-full w-24 h-24 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDdlJ9bo7f5d6w82MI6NQiaiiVFiDj7AwAQ&usqp=CAU"
              width={1000}
              height={1000}
              alt="profile"
            ></Image>
            <h2 className="text-white font-semibold text-2xl">
              Armando Mendoza Style SA
            </h2>
          </div>
          <div className="hidden xl:flex space-x-6 text-white text-2xl">
            <a
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              Support
            </a>
            <a
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              FAQ
            </a>
            <a
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              Your Plan
            </a>
          </div>
          <a
            href=""
            className="hidden xl:block p-3 px-6 pt 2 text-white bg-fondo-100 rounded-full baseline hover:bg-white hover:text-fondo-300 transition-all text-2xl"
          >
            Upgrade
          </a>
        </div>
      </nav>
      <section id="welcome">
        <div className="container flex flex-col-reverse lg:flex-row items-center px-6 mx-auto mt-10 space-y-0 lg:space-y-0">
          <div className="flex flex-col mb-12 space-y-12 lg:w-1/2 md:items-center lg:items-start">
            <h1 className="max-w-md text-4xl font-bold text-center lg:text-left xl:text-5xl text-fondo-200">
              Congratulations on becoming a new Lazy-Seller, now it's time to
              make the next step!
            </h1>
            <p className="max-w-sm text-center text-fondo-100 lg:text-left">
              In Lazy-Buy we now that you're putting all your effort to make
              your business grow. And that's why we designed this web site
              specially made for you and your company. But being a part of our
              lazy-sellers it's only the first step!
            </p>
            <div className="flex justify justify-center lg:justify-start">
              <a
                href="/dashboard/plan"
                className="p-3 px-6 pt 2 text-white bg-fondo-300 rounded-full baseline hover:bg-fondo-200 hover:text-white transition-all text-2xl"
              >
                Upgrade
              </a>
            </div>
          </div>

          <div className="pr-5 pb-6 lg:w-1/2 lg:pb-24 xl:pb-32">
            <Image className="" src={det} />
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 lg:space-y-0 lg:flex-row">
          <div className="flex flex-col space-y-12 lg:w-1/2 md:items-center lg:items-start">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-4xl lg:text-left xl:text-5xl text-fondo-200">
              What's the difference about manage your own virtual office
            </h2>
            <p className="max-w-sm text-center text-fondo-200 lg:text-left">
              Running a business can be challenging, but it doesn't have to be.
              One solution that can make things easier for you is a virtual
              office. A virtual office is a service that provides you with a
              professional business address, mail handling and call answering
              services, without the need for a physical office space. Choosing a
              virtual office can bring many benefits to your business. <br />
              <br />
              Firstly, it can save you money on overhead costs. With a virtual
              office, you don't have to worry about paying rent and utilities
              for a physical office space. You can also save on office supplies
              and furniture. This can free up more of your budget to invest in
              other areas of your business. Additionally, a virtual office can
              provide you with a prestigious business address, which can help to
              enhance your company's image and credibility.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 lg:w-1/2">
            {/* List item 1 */}
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-6 lg:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-fondo-100 lg:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-fondo-300">
                    01
                  </div>
                  <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                    Edit your profile for your clients
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold lg:block">
                  Edit your profile for your clients
                </h3>
                <p className="text-fondo-200 text-justify">
                  In your personal dashboard you can edit your profile to show all
                  the information that your clients need to start knowing you and 
                  the quality of your products. <br/>
                  It's important for your business to have clear presentation.
                </p>
                <a
                  className="hidden p-2 bg-fondo-200 rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3"
                  href="/dashboard/products"
                >
                  Store
                </a>
              </div>
              <a
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/products"
              >
                Store
              </a>
            </div>

            {/* List item 2 */}
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-6 lg:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-fondo-100 lg:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-fondo-300">
                    02
                  </div>
                  <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                    Track your stock of products with customized view
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold lg:block">
                  Track your stock of products with customized view
                </h3>
                <p className="text-fondo-200 text-justify">
                  In your personal dashboard, you can count with a perfectly
                  customized storage that provides you everything you need to
                  have a maximum control of your products, and stock available.
                  Also you can create new products, edit old ones, even choose
                  which products are visualized in your store.
                </p>
                <a
                  className="hidden p-2 bg-fondo-200 rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3"
                  href="/dashboard/products"
                >
                  Store
                </a>
              </div>
              <a
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/products"
              >
                Store
              </a>
            </div>

            {/* List item 3 */}
            <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-6 lg:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-fondo-100 lg:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full lg:py-1 bg-fondo-300">
                    03
                  </div>
                  <h3 className="text-base font-bold lg:mb-4 lg:hidden">
                    Track your stock of products with customized view
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold lg:block">
                  Track your stock of products with customized view
                </h3>
                <p className="text-fondo-200 text-justify">
                  In your personal dashboard, you can count with a perfectly
                  customized storage that provides you everything you need to
                  have a maximum control of your products, and stock available.
                  Also you can create new products, edit old ones, even choose
                  which products are visualized in your store.
                </p>
                <a
                  className="hidden p-2 bg-fondo-200 rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3"
                  href="/dashboard/products"
                >
                  Store
                </a>
              </div>
              <a
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/products"
              >
                Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
