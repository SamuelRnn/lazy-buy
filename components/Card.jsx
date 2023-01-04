import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="bg-white max-w-sm mx-auto rounded-lg shadow-xl">
    <div className="py-4 px-6 flex flex-col gap-2">
        <a href="#" className="text-2xl font-bold text-gray-700">Renault</a>
        <p className="text-gray-500">
            Bicicleta deportiva seminueva, color azul.
        </p>
    </div>
    <div>
        <Image
          src="https://bicialtea.labici.net/images/bicialtea.png"
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
  )
}

export default Card