import Image from "next/image";
import logo from "../public/lazycartremove.png";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full bg-fondo-200 p-4 flex flex-1 flex-wrap gap-2 items-center justify-evenly">
      <div className="">
        <Link href="/home" className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className="m-2 font-bold text-fondo-500 text-xl hover:text-white transition ease-in-out">
            Lazy Buy
          </h1>
        </Link>
      </div>
      <form className="flex items-center justify-center gap-2 w-96 ml-8">
        <input
          type="text"
          className="w-full bg-gray-100 outline-none p-2 rounded-lg"
          placeholder="Buscar"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
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
          Nostros
        </a>
        <a
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors text-zinc-700 font-semibold"
        >
          Tienda virtual
        </a>
        <button
          href="#"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-fondo-100 transition-colors"
        >
          <MdShoppingCart className="text-4xl text-fondo-400" />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
