import NavBar from "./Elements_Layout/Navbar/NavBar";
import Footer from "./Elements_Layout/Footer";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { BiChevronUp } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Layout = ({ children, title = "Lazy Buy", noLayout = false }) => {
  const [isActive, setActive] = useState(false);
  document.documentElement.style.scrollBehavior = "smooth";
  document.body.onscroll = () => {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 10) {
      setActive(true);
    }
    if (currentScroll < 10) {
      setActive(false);
    }
  };

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
        {isActive && (
          <motion.button
            initial={{ y: 100, opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0.4 }}
            onClick={() => (document.documentElement.scrollTop = 0)}
            className="fixed z-50 bottom-10 left-10 grid place-content-center w-14 h-14 rounded-full bg-fondo-400 text-zinc-100 hover:bg-fondo-300"
          >
            <BiChevronUp className="text-4xl" />
          </motion.button>
        )}
      </AnimatePresence>
      {!noLayout && <NavBar />}
      <main className="">{children}</main>
      {!noLayout && <Footer />}
    </>
  );
};

export default Layout;
