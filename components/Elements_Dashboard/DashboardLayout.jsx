import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const DashboardLayout = ({
  children,
  setActive,
  title = "Lazy Buy | Dashboard",
}) => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) addEventListener("resize", handleResize);

    // when the component is unmounted
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []); */

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/logocartremove.png"
          type="image/x-icon"
        />
        <title>{title}</title>
      </Head>
      <Toaster position="top-center" />
      <AnimatePresence>
        <div className="">
          <TopBar showNav={showNav} setShowNav={setShowNav} />
          <Transition
            as={Fragment}
            show={showNav}
            enter="transform transition duration-[400ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform duration-[400ms] transition ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <SideBar showNav={showNav} setActive={setActive} />
          </Transition>
          <main className="pt-16 transition-all duration-[400ms]">
            <div className="px-4 md:px-16">{children}</div>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
};

export default DashboardLayout;
