/* eslint-disable @next/next/no-html-link-for-pages */
import ModalCart from "../../Elements_Cart/ModalCart";
import SearchBar from "./SearchBar";
import NavSubMenu from "./NavSubMenu";
import logo from "../../../public/lazycartremove.png";
import Image from "next/image";
import { GiShoppingBag } from "react-icons/gi";
import { BsCaretDownFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../../../redux/cartSlice";
import UserMenu from "./UserMenu";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const sessionData = useSelector((state) => state.account.session);
  const [activeCatModal, setActiveCatModal] = useState(false);
  const [activeRegModal, setActiveRegModal] = useState(false);
  const [activeCartModal, setActiveCartModal] = useState(false);
  const [activeHamburger, setActiveHamburger] = useState(false);
  const cart_count = useSelector(getCart).reduce((v, e) => v + e.quantity, 0);

  return (
    <header className="w-full bg-fondo-200">
      <div className="main h-[3.8rem] flex flex-wrap gap-x-4 gap-y-2 items-center lg:justify-between justify-center">
        <div className="flex items-center gap-x-4 justify-center flex-wrap gap-y-2">
          {/* logo */}
          <a href="/" className="nav_links flex items-center gap-1">
            <Image src={logo} alt="logo" width={30} height={30} />
            <h1 className="font-bold text-fondo-400 text-xl transition-colors ease-in-out">
              Lazy Buy
            </h1>
          </a>
          <SearchBar />
        </div>

        {/* navlinks */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-x-3">
            <button
              className={`nav_links ${activeCatModal ? "underline" : ""}`}
              onClick={() => {
                setActiveCatModal((state) => !state);
                setActiveRegModal(false);
              }}
            >
              Categories
            </button>

            {/* conditional UI  */}

            {/* Signup & Signin */}
            {sessionData === "no-session" && (
              <button
                className={`nav_links ${activeRegModal ? "underline" : ""}`}
                onClick={() => {
                  setActiveRegModal((state) => !state);
                  setActiveCatModal(false);
                }}
              >
                Access
              </button>
            )}
            {/* Dashboard */}
            {sessionData !== "no-session" && sessionData.type === "company" && (
              <a href="/dashboard" className="nav_links">
                Dashboard
              </a>
            )}
            {/* Cart */}
            {(sessionData === "no-session" || sessionData.type === "user") && (
              <button
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setActiveCartModal(true);
                }}
                className="nav_links relative"
              >
                <GiShoppingBag className="text-[28px] text-fondo-400" />
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-zinc-600 text-gray-200 text-xs grid place-content-center">
                  {cart_count}
                </span>
              </button>
            )}
            {/* Profile Toggle */}
            {sessionData !== "no-session" && (
              <button
                onClick={() => setActiveHamburger((state) => !state)}
                className="nav_links flex items-center gap-1"
              >
                <Image
                  src={
                    sessionData.image ||
                    "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673480864/lazy-buy/Dise%C3%B1o_sin_t%C3%ADtulo_r4admw.png"
                  }
                  width={32}
                  height={32}
                  alt={"pfp"}
                  className="w-[32px] h-[32px] object-cover rounded-full bg-fondo-400"
                />
                <BsCaretDownFill size={15} />
              </button>
            )}
          </nav>
        </div>
      </div>
      <NavSubMenu
        sourceArray={[
          "Textile",
          "Accessories",
          "Electronics",
          "Handicraft",
        ].map((str) => ({
          title: str,
          link: `/products?category=${str.toLowerCase()}&page=1`,
        }))}
        isActive={activeCatModal}
      />
      <NavSubMenu
        sourceArray={[
          { title: "Log In", link: "/login" },
          { title: "Sign Up", link: "/signup" },
        ]}
        isActive={activeRegModal}
      />
      <ModalCart active={activeCartModal} setActive={setActiveCartModal} />
      <AnimatePresence>
        {activeHamburger && (
          <UserMenu setActive={setActiveHamburger} active={activeHamburger} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
