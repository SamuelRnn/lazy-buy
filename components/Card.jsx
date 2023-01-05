import React from "react";
import Image from "next/image";
import Link from "next/link";
//TODO: refactor class "card_width"
const mock_product = {
  name: "Renault",
  slug: "43-renault",
  price: 1000.0,
  company: { name: "Crocs SA" },
  image: "https://bicialtea.labici.net/images/bicialtea.png",
};
const Card = ({ product = mock_product }) => {
  return (
    <Link href={"/products/" + product.slug}>
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
    </Link>
  );
};

export default Card;
