import Image from "next/image";
import logo from "../public/lazycartremove.png";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavSubMenu from "./NavSubMenu";
import { useState } from "react";
const NavBar = () => {
  const [activeCategoriesModal, setActiveCategoriesModal] = useState(false);
  const [activeRegModal, setActiveRegModal] = useState(false);
  return (
    <header className="w-full bg-fondo-200">
      <div className="nav py-2 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between max-lg:justify-center">
        {/* logo */}
        {/* SearchBar */}
        <div className="flex items-center gap-x-4 justify-center flex-wrap gap-y-2">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={45} height={45} />
            <h1 className="mx-2 font-bold text-fondo-500 hover:text-white text-xl transition-colors ease-in-out">
              Lazy Buy
            </h1>
          </Link>
          <SearchBar />
        </div>

        {/* navlinks */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-x-4">
            <Link
              href="/nosotros"
              className="p-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
            >
              Nosotros
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
              onClick={() => {
                setActiveCategoriesModal((state) => !state);
                setActiveRegModal(false);
              }}
            >
              Categorias
            </button>
            <button
              className="p-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
              onClick={() => {
                setActiveRegModal((state) => !state);
                setActiveCategoriesModal(false);
              }}
            >
              Acceder
            </button>
            <button
              href=""
              className="p-2 rounded-lg hover:bg-fondo-100 transition-colors"
            >
              <MdShoppingCart className="text-[28px] text-fondo-400" />
            </button>
          </nav>
        </div>
      </div>
      <NavSubMenu
        sourceArray={[
          { title: "Juguetes", link: "/categories/juguetes" },
          { title: "Jesucristo", link: "/categories/jesucristo" },
          { title: "Panes", link: "/categories/panes" },
          { title: "Carros", link: "/categories/carros" },
          { title: "Azul", link: "/categories/azul" },
        ]}
        isActive={activeCategoriesModal}
      />
      <NavSubMenu
        sourceArray={[
          { title: "Log In", link: "/login" },
          { title: "Sign Up", link: "/signup" },
        ]}
        isActive={activeRegModal}
      />
    </header>
  );
};

export default NavBar;
