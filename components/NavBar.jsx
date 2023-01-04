import Image from "next/image";
import logo from "../public/lazycartremove.png";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { useState } from "react";

const NavBar = () => {
  const [activeCategoriesModal, setActiveCategoriesModal] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full bg-fondo-200 py-2 flex flex-1 flex-wrap gap-2 items-center justify-evenly ">
        <div className="">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={45} height={45} />
            <h1 className="m-2 font-bold text-fondo-500 text-xl hover:text-white transition ease-in-out">
              Lazy Buy
            </h1>
          </Link>
        </div>
        <SearchBar />
        <nav className="md:col-span-6 flex items-center gap-4 justify-end">
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
          >
            Inicio
          </a>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
            onClick={() => setActiveCategoriesModal((state) => !state)}
          >
            Categorias
          </a>
          <button
            href="#"
            className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors"
          >
            <MdShoppingCart className="text-3xl text-fondo-400" />
          </button>
        </nav>
      </div>
      <Categories
        sourceArray={["Juguetes", "Jesucristo", "Panes", "Carros", "Ferraris"]}
        isActive={activeCategoriesModal}
      />
    </header>
  );
};

export default NavBar;
