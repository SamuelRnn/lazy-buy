import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

const DashboardNav = () => {

    const companyData = useSelector((state) => state.account.session);

  return (
    <nav className="relative p-2 bg-fondo-300 lg:p-6 container mx-auto rounded-b-3xl shadow-xl shadow-zinc-400">
    <div className="flex items-center justify-around">
      <div className="pt-2 flex items-center space-x-4">
        <Image
          className="rounded-full w-16 h-16 object-cover lg:w-24 lg:h-24"
          src={companyData.image}
          width={1000}
          height={1000}
          alt="profile"
        ></Image>
        <h2 className="text-white font-semibold text-md lg:text-lg">
          {companyData.name}
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
          href="/dashboard/faqs"
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
      {/* <button
        id="menu_btn"
        className="block hamburger lg:hidden focus:outline-none mt-4"
        onClick={hambHandler}
      >
        <span className="hamburger_top"></span>
        <span className="hamburger_mid"></span>
        <span className="hamburger_bot"></span>
      </button> */}
    </div>

    {/* MOBILE MENU */}
    {/* <div className="lg:hidden">
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
    </div> */}
  </nav>
  )
}

export default DashboardNav