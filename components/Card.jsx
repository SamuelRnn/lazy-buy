import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

//TODO: refactor class "card_width"
const mock_product = {
  name: "Renault modelo verano RTX kojima",
  slug: "43-renault-modelo-verano-rtx-kojimo",
  price: 1000.0,
  company: { name: "Crocs & Sneakers SA" },
  mainImage: { url: "https://bicialtea.labici.net/images/bicialtea.png" },
};
//recibe 2 styles: "card" "wider"
const Card = ({ product = mock_product, style = "card", delay }) => {
  return (
    <Link href={"/products/" + product.slug}>
      {style === "card" && (
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.95 }}
          transition={{ bounce: true, ease: "backOut" }}
          className="bg-white max-w-sm mx-auto rounded-lg shadow-xl card_width"
        >
          <div className="py-4 px-6 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-700">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.company.name}</p>
          </div>
          <div>
            <Image
              src={product.mainImage.url}
              alt="Adidas"
              className="h-44 mx-auto object-cover"
              height={44}
              width={150}
            />
          </div>
          <div className="py-4 px-6 flex items-center justify-between bg-pry-600 rounded-bl-lg rounded-br-lg">
            <span className="text-white font-bold">
              ${product.price.toFixed(2)}
            </span>
            <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
              Agregar al carrito
            </button>
          </div>
        </motion.div>
      )}
      {/* wider style for Card */}
      {style === "wider" && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white h-[200px] w-[800px] rounded-lg shadow-xl hover:scale-110 transition-transform">
            <div className="p-6 flex">
              <div className="mr-6 h-[152px] w-[152px]">
                <Image
                  src={product.mainImage.url}
                  alt="Adidas"
                  height={152}
                  width={152}
                  className="h-[152px] w-[152px] bg-white object-cover brightness-105 mix-blend-multiply"
                />
              </div>
              <div className="w-full px-6 bg-zinc-100 rounded pt-4">
                <h3 className="font-bold text-xl text-gray-700">
                  {product.name}
                </h3>
                <h4 className="text-sm text-gray-500">
                  {product.company.name}
                </h4>

                <div className="mt-6">
                  <p className="font-mono font-bold text-2xl text-fondo-300">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Link>
  );
};

export default Card;
