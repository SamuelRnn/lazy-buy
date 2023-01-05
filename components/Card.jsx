import React from "react";
import Image from "next/image";
import Link from "next/link";
//TODO: refactor class "card_width"
const mock_product = {
  name: "Renault modelo verano RTX kojima",
  slug: "43-renault-modelo-verano-rtx-kojimo",
  price: 1000.0,
  company: { name: "Crocs & Sneakers SA" },
  image: "https://bicialtea.labici.net/images/bicialtea.png",
};
//recibe 2 styles: "card" "wider"
const Card = ({ product = mock_product, style = "card" }) => {
  return (
    <Link href={"/products/" + product.slug}>
      {style === "card" && (
        <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl card_width hover:scale-95 transition-transform">
          <div className="py-4 px-6 flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-gray-700">{product.name}</h3>
            <p className="text-gray-500">{product.company.name}</p>
          </div>
          <div>
            <Image
              src={product.image}
              alt="Adidas"
              className="h-44 mx-auto object-cover"
              height={44}
              width={150}
              object-fit="cover"
            />
          </div>
          <div className="py-4 px-6 flex items-center justify-between bg-pry-600 rounded-bl-lg rounded-br-lg">
            <span className="text-white font-bold">$1,500.00</span>
            <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {/* wider style for Card */}
      {style === "wider" && (
        <div className="bg-white w-[800px] h-[200px] rounded-lg shadow-xl hover:scale-110 transition-transform">
          <div className="p-6 flex">
            <Image
              src={product.image}
              alt="Adidas"
              height={152}
              width={152}
              object-fit="cover"
            />
            <div className="w-full px-8 bg-zinc-100 rounded pt-4">
              <h3 className="font-bold text-xl text-gray-700">
                {product.name}
              </h3>
              <h4 className="text-sm text-gray-500">{product.company.name}</h4>

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
