import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalMenu from "./ModalMenu";

const DashboardNav = () => {
  const companyData = useSelector((state) => state.account.session);
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setShowModal(!showModal)
  };

  return (
    <>
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
        <div className="hidden md:flex space-x-2 text-white text-lg font-semibold items-center mt-2">
          <Link
            className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
            href="mailto:lazybuy23@gmail.com?subject=What%20is%20your%20inconvenient"
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
            href="/dashboard/yourplan"
          >
            Your Plan
          </Link>
          {route.pathname !== "/dashboard" && (
            <Link
              className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all"
              href="/dashboard"
            >
              Home
            </Link>
          )}
        </div>
        <button onClick={handleOpen} className="md:hidden flex flex-col gap-1 mt-2">
          <motion.div
            variants={{
              open: { rotate: -45, translateY: 4 },
              close: { rotate: 0 },
            }}
            animate={isOpen ? "open" : "close"}
            className="border-2xl border-slate-700 w-6 h-1 bg-fondo-50"
          ></motion.div>
          <motion.div
            variants={{
              open: { opacity: 0, display: "none" },
              close: { opacity: 1 },
            }}
            animate={isOpen ? "open" : "close"}
            className="border-2xl border-slate-700 w-6 h-1 bg-fondo-50 overflow-hidden"
          ></motion.div>
          <motion.div
            variants={{
              open: { rotate: 45, translateY: -4 },
              close: { rotate: 0 },
            }}
            animate={isOpen ? "open" : "close"}
            className="border-2xl border-slate-700 w-6 h-1 bg-fondo-50"
          ></motion.div>
        </button> 
      </div>
    </nav>
    <ModalMenu showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default DashboardNav;
