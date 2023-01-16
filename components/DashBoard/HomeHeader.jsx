import React from "react";
import Image from "next/image";
import det from "../../public/dashdet2.png";
import Link from "next/link";
import { motion } from "framer-motion";


const HomeHeader = () => {
 
  const hambHandler = () => {
    let menu = document.getElementById('menu')
    let hamb = document.getElementById('menu_btn')
    hamb.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }

  return (
    <>
      <nav className="relative p-2 bg-fondo-300 lg:p-6 container mx-auto rounded-b-3xl shadow-xl shadow-zinc-400">
        <div className="flex items-center justify-around">
          <div className="pt-2 flex items-center space-x-4">
            <Image
              className="rounded-full w-16 h-16 object-cover lg:w-24 lg:h-24"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDdlJ9bo7f5d6w82MI6NQiaiiVFiDj7AwAQ&usqp=CAU"
              width={1000}
              height={1000}
              alt="profile"
            ></Image>
            <h2 className="text-white font-semibold text-md lg:text-lg">
              Armando Mendoza Style SA
            </h2>
          </div>
          <div className="hidden lg:flex space-x-2 text-white text-lg font-semibold items-center mt-2">
            <Link
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              Support
            </Link>
            <Link
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              FAQ
            </Link>
            <Link
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="#"
            >
              Your Plan
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button
            id="menu_btn"
            className="block hamburger lg:hidden focus:outline-none mt-4"
            onClick={hambHandler}
          >
            <span className="hamburger_top"></span>
            <span className="hamburger_mid"></span>
            <span className="hamburger_bot"></span>
          </button>
     
        </div>
        {/* MOBILE MENU */}
        <div className="lg:hidden"
        >
            <div
              id="menu"
              className="absolute hidden flex-col items-center self-end py-8 mt-3 space-y-6 font-bold bg-zinc-50 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md rounded-b-md"
            >
              <Link
                className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
                href="#"
              >
                Support
              </Link>
              <Link
                className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
                href="#"
              >
                FAQ
              </Link>
              <Link
                className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
                href="#"
              >
                Your Plan
              </Link>
            </div>
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
              <Link
                href="/dashboard/plan"
                className="p-3 px-6 pt 2 text-white bg-fondo-300 rounded-full baseline hover:bg-white hover:text-fondo-300 hover:border-fondo-300   border transition-all text-2xl"
              >
                Upgrade
              </Link>
            </div>
          </div>

          <div className="pr-5 pb-6 lg:w-1/2 lg:pb-24 xl:pb-32">
            <Image className="" src={det} />
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 lg:space-y-0 lg:flex-row mb-10">
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
                  In your personal dashboard you can edit your profile to show
                  all the information that your clients need to start knowing
                  you and the quality of your products. <br />
                  It's important for your business to have clear presentation.
                </p>
                <Link
                  className="hidden p-2 bg-fondo-300 border rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 transition-all"
                  href="/dashboard/account"
                >
                  Account
                </Link>
              </div>
              <Link
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/products"
              >
                Account
              </Link>
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
                <Link
                  className="hidden p-2 bg-fondo-300 border rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 transition-all"
                  href="/dashboard/products"
                >
                  Store
                </Link>
              </div>
              <Link
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/products"
              >
                Store
              </Link>
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
                  Watch live charts with the stats you need
                </h3>
                <p className="text-fondo-200 text-justify">
                  In your personal dashboard you can also view a set of charts
                  to see your real progress in real time. This way you can watch
                  your progress, the amount of sales, your most valued products
                  and more
                </p>
                <Link
                  className="hidden p-2 bg-fondo-300 border rounded-full text-center w-1/4 mx-auto mr-2 mt-3 text-white lg:block lg:w-1/3 xl:w-1/4 xl:mt-3 hover:bg-white hover:text-fondo-300 hover:border-fondo-300 transition-all"
                  href="/dashboard"
                >
                  Performance
                </Link>
              </div>
              <Link
                className="p-2 bg-fondo-200 rounded-full text-center w-1/2 md:w-1/4 mx-auto text-white lg:hidden"
                href="/dashboard/performance"
              >
                Performance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="my-12">
        {/* Heading and testimonials container */}
        <div className="max-w-6xl px-5 mx-auto mt-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-fondo-200">
            What's different about your own virtual office
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col space-y-12 mt-24 lg:space-y-0 lg:flex-row lg:space-x-6">
            {/* Testimonie 1 */}
            <div className="flex flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Liza Cudrow</h5>
              <p className="text-sm text-zinc-100">
                Have my own virtual office, provided me with the full control I
                nedeed to grow my business
              </p>
            </div>

            <div className="hidden flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:flex lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Samwise Gamyi</h5>
              <p className="text-sm text-zinc-100">
                Since I sell my products in Lazy-Buy, my number of customers has
                increased a lot and also I can track their tastes about my
                products
              </p>
            </div>

            <div className="hidden flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:flex lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Arwen Udromiel</h5>
              <p className="text-sm text-zinc-100">
                I've never thought been a lazy-seller could make this awesomes
                changes in my work style. Now I can control my numbers and also
                increase them!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="foot" className="bg-fondo-300 rounded-t-lg mt-24">
        <div className="container flex flex-col items-center justify-around px-3 py-3 mx-auto space-y-6 lg:py-12 lg:flex-row lg:space-y-0">
          <h2 className="text-4xl font-bold leading-tight text-center text-white lg:text-5xl lg:max-w-xl lg:text-left">
            Go premmium now!
          </h2>
          <Link
            href="/dashboard/plan"
            className="xl:block p-3 px-6 pt 2 text-white bg-fondo-100 rounded-lg hover:bg-white hover:text-fondo-300 transition-all text-2xl"
          >
            Upgrade
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
