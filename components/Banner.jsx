import React from "react";
import Link from "next/link";

function Banner() {
  return (
    <div className="w-full min-h-[400px] banner_img rounded relative">
      <div className="absulute w-full h-full min-h-[400px] bg-opacity-50 bg-zinc-800 px-8 pt-[80px] pb-12">
        <h2 className="text-[56px] text-white font-semibold leading-[70px]">
          ¿Por qué deberías vender tus productos con nosotros?
        </h2>
        <Link href={"/about"}>
          <button className="mt-12 sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-fondo-300 text-white ease-out duration-300 hover:-translate-x-2 ">
            Leer articulo(?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
