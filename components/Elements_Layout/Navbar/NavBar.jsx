/* eslint-disable @next/next/no-html-link-for-pages */
import ModalCart from "../../Elements_Cart/ModalCart";
import SearchBar from "./SearchBar";
import NavSubMenu from "./NavSubMenu";
import logo from "../../../public/logocartremove.png";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const sessionData = useSelector((state) => state.account.session);
  const [activeCatModal, setActiveCatModal] = useState(false);
  const [activeRegModal, setActiveRegModal] = useState(false);
  const [activeCartModal, setActiveCartModal] = useState(false);
  return (
    <header className="w-full bg-fondo-200">
      <div className="main py-2 flex flex-wrap gap-x-4 gap-y-2 items-center lg:justify-between justify-center">
        <div className="flex items-center gap-x-4 justify-center flex-wrap gap-y-2">
          {/* logo */}
          <a href="/" className="nav_links flex items-center gap-1">
            <Image src={logo} alt="logo" width={27} height={27} />
            <h1 className="font-bold text-fondo-400 text-xl transition-colors ease-in-out">
              Lazy Buy
            </h1>
          </a>
          <SearchBar />
        </div>

        {/* navlinks */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-x-3">
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

            {/* conditional UI  */}
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
            {sessionData !== "no-session" && sessionData.type === "company" && (
              <a href="/dashboard" className="nav_links">
                Dashboard
              </a>
            )}
            {sessionData === "no-session" ||
              (sessionData.type !== "company" && (
                <button
                  onClick={() => setActiveCartModal(true)}
                  className="nav_links"
                >
                  <MdShoppingCart className="text-[28px] text-fondo-400" />
                </button>
              ))}
            {sessionData !== "no-session" && (
              <button
                onClick={() => toast(`Hola ${sessionData.name}`)}
                className="nav_links flex items-center gap-1"
              >
                <Image
                  className="border rounded-full border-fondo-300 bg-fondo-400"
                  src={sessionData.image}
                  width={30}
                  height={30}
                  alt={"pfp"}
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
    </header>
  );
};

export default NavBar;
