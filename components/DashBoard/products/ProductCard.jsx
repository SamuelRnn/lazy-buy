import Image from "next/image";
import { AiTwotoneEdit, AiFillCaretDown } from "react-icons/ai";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsFillStarFill,
} from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import { ImPriceTag } from "react-icons/im";

const ProductCard = ({ product, editProduct, id }) => {
  return (
    <div className="relative bg-zinc-100 border border-zinc-300 rounded-lg w-[160px]">
      {/* product options */}
      <div className="absolute right-[-10px] top-[32px] flex flex-col rounded-md overflow-hidden">
        <div className="flex flex-col gap-y-2 mt-1">
          {/* product visibility */}
          <button className="p-2 rounded-md bg-zinc-500 bg-opacity-60 hover:bg-opacity-100 hover:bg-fondo-400 transition-colors">
            <BsFillEyeSlashFill className="text-2xl text-zinc-100" />
          </button>
          {/* edit product */}
          <button
            onClick={() => editProduct(id)}
            className="p-2 rounded-md bg-zinc-500 bg-opacity-60 hover:bg-opacity-100 hover:bg-fondo-400 transition-colors"
          >
            <AiTwotoneEdit className="text-2xl text-zinc-100" />
          </button>
          {/* borrado logico del producto */}
          <button className="p-2 rounded-md bg-zinc-500 bg-opacity-60 hover:bg-opacity-100 hover:bg-fondo-400 transition-colors">
            <BsFillTrashFill className="text-2xl text-zinc-100" />
          </button>
        </div>
      </div>

      <div>
        <div className="px-3 py-3 text-slate-600">
          <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-3/5">
            {product.name}
          </h2>
        </div>
        <Image
          alt={product.name}
          title={product.name}
          src={product.mainImage.url}
          width={320}
          height={100}
          className="w-[160px] h-[110px] object-cover"
        />
        <div className="bg-zinc-600 py-3 px-5 text-zinc-100 text-sm">
          <p className="flex font-bold">
            <ImPriceTag className="mr-1 mt-[5px]" />
            {product.price.toFixed(2)}
          </p>
          <p
            className={`flex font-bold ${
              product.stock < 10 ? "text-red-500" : ""
            }`}
          >
            <MdInventory className="mr-1 mt-[5px]" />
            {product.stock}
          </p>
          <p className="flex font-bold">
            <BsFillStarFill className="mr-1 mt-[5px]" />
            {product.averageRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
