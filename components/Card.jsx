import React from "react";
import Image from "next/image";
import Link from "next/link";
//TODO: refactor class "card_width"

//recibe 2 styles: "card" "wider"
const Card = ({ product, style = "card" }) => {

 return (
  
    <Link href={"/products/" + product.id}>
      {style === "card" && (
        <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl card_width hover:scale-95 transition-transform">
          <div className="py-4 px-6 flex flex-col gap-2">
            <h4 className="text-xl font-bold text-gray-700">{product.title.slice(0,2)}</h4>
            <p className="text-gray-500 text-sm">{product.title.slice(0,2)}</p>
          </div>
          <div>
            <Image
              src={product.image}
              alt="Adidas"
              className="h-44 mx-auto object-cover"
              height={44}
              width={150}
            />
          </div>
          <div className="py-4 px-6 flex items-center justify-between bg-pry-600 rounded-bl-lg rounded-br-lg">
            <span className="text-white font-bold">
              {product.price}
            </span>
            <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {/* wider style for Card */}
      {style === "wider" && (
        <div className="bg-white h-[200px] w-[800px] rounded-lg shadow-xl hover:scale-110 transition-transform">
          <div className="p-6 flex">
            <div className="mr-6 h-[152px] w-[152px]">
              <Image
                src={product.image}
                alt="Adidas"
                height={152}
                width={152}
                className="h-[152px] w-[152px] bg-white object-cover brightness-105 mix-blend-multiply"
              />
            </div>
            <div className="w-full px-6 bg-zinc-100 rounded pt-4">
              <h3 className="font-semibold text-xl text-gray-700">
                {product.title.slice(0,10)}
              </h3>
              <h4 className="text-sm text-gray-500">{product.description.slice(0, 20)}</h4>

              <div className="mt-6">
                <p className="font-mono font-bold text-2xl text-fondo-300">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Card;
