/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import logo from "../public/lazycartremove.png";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "./SearchBar";
import NavSubMenu from "./NavSubMenu";
import { useState } from "react";
import ModalCart from "./CartModal/Modal";

const NavBar = () => {
  const [activeCatModal, setActiveCatModal] = useState(false);
  const [activeRegModal, setActiveRegModal] = useState(false);
  const [activeCartModal, setActiveCartModal] = useState(false);
  return (
    <header className="w-full bg-fondo-200">
      <div className="nav py-2 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between max-lg:justify-center">
        {/* logo */}
        {/* SearchBar */}
        <div className="flex items-center gap-x-4 justify-center flex-wrap gap-y-2">
          <a href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={45} height={45} />
            <h1 className="mx-2 font-bold text-fondo-500 hover:text-white text-xl transition-colors ease-in-out">
              Lazy Buy
            </h1>
          </a>
          <SearchBar />
        </div>

        {/* navlinks */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-x-4">
            <a href="/about" className="nav_links">
              About
            </a>
            <button
              className={`nav_links ${activeCatModal ? "underline" : ""}`}
              onClick={() => {
                setActiveCatModal((state) => !state);
                setActiveRegModal(false);
              }}
            >
              Categories
            </button>
            <button
              className={`nav_links ${activeRegModal ? "underline" : ""}`}
              onClick={() => {
                setActiveRegModal((state) => !state);
                setActiveCatModal(false);
              }}
            >
              Access
            </button>
            <button
              onClick={() => setActiveCartModal(true)}
              className="nav_links"
            >
              <MdShoppingCart className="text-[28px] text-fondo-400" />
            </button>
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
    </header>
  );
};

export default NavBar;
