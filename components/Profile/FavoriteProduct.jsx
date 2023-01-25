import React from 'react'
import Image from 'next/image'
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsFillStarFill,
} from 'react-icons/bs'
import { FaHeartBroken } from 'react-icons/fa'
import { ImPriceTag } from 'react-icons/im'
import { MdInventory } from 'react-icons/md'
import { useDeleteWishItemMutation } from '../../redux/userApi'
import Link from 'next/link'
import { motion } from 'framer-motion'

const FavoriteProduct = ({ email, product }) => {
  const [deleteProduct] = useDeleteWishItemMutation()
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ bounce: false, duration: 0.3 }}
      initial={{ x: -200, y: 10, opacity: 0 }}
      whileInView={{ x: 2, opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-zinc-50 rounded-lg w-[250px] sm:w-[320px] md:w-[720px] shadow-md shadow-zinc-400"
    >
      {/* product options */}

      <div className="absolute flex flex-col justify-between z-20 top-[-6px] right-[-6px] h-full">
        <div className="flex flex-col gap-1 mb-[-10px]">
          {/* borrado logico del producto */}
          <button
            title="delete product"
            onClick={() => {
              deleteProduct({ id: product.id, email })
            }}
            className="p-2 rounded-md bg-fondo-200 hover:bg-opacity-100 hover:bg-fondo-400 transition-colors shadow-md shadow-zinc-700"
          >
            <FaHeartBroken className="text-2xl text-zinc-100" />
          </button>
        </div>
      </div>

      <Link href={'/products/' + product.slug}>
        <div>
          <div className="px-3 py-2 text-fondo-200">
            <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-3/4">
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
          <div className="bg-fondo-100 py-3 px-5 text-zinc-100 text-sm rounded-b-lg">
            <p className="flex font-bold">
              <ImPriceTag className="mr-1 mt-[5px]" />
              {product.price.toFixed(2)}
            </p>
            <p
              className={`flex font-bold ${
                product.stock < 10 ? 'text-red-500' : ''
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
      </Link>
    </motion.div>
  )
}

export default FavoriteProduct
