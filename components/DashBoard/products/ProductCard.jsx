import Image from "next/image";
import { AiTwotoneEdit } from "react-icons/ai";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsFillStarFill,
} from "react-icons/bs";
import { MdInventory } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-zinc-100 border border-zinc-300 rounded-lg w-[320px]">
      <div className="absolute right-[-16px] top-[-10px] flex flex-col gap-y-2 p-1 bg-zinc-400 rounded-md">
        <button className="p-2 rounded-md bg-zinc-500 hover:bg-fondo-400 transition-colors">
          <BsFillEyeSlashFill className="text-2xl text-zinc-100" />
        </button>
        <button className="p-2 rounded-md bg-zinc-500 hover:bg-fondo-400 transition-colors">
          <AiTwotoneEdit className="text-2xl text-zinc-100" />
        </button>
        <button className="p-2 rounded-md bg-zinc-500 hover:bg-fondo-400 transition-colors">
          <BsFillTrashFill className="text-2xl text-zinc-100" />
        </button>
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
          className="w-[320px] h-[220px] object-cover"
        />
        <div className="bg-zinc-600 h-20 flex justify-between items-center p-5 text-zinc-100 text-lg">
          <p className="font-bold">$ {product.price.toFixed(2)}</p>
          <div className="flex gap-x-4">
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
    </div>
  );
};

export default ProductCard;
