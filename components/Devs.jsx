import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const integrantes = [
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Franco",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Brayan",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Juan",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Juanpi",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Samuel",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Agus",
  },
  {
    img: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
    alt_img: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
    name: "Sojo",
  },
];
const Devs = ({ dev = integrantes }) => {
  return (
    <>
      {integrantes.map((dev) => (
        <div
          key={dev.name}
          className="bg-white px-1 md:px-2 md:my-auto my-5 hover:bg-fondo-300 group rounded-lg shadow hover:shadow-lg hover:shadow-fondo-400 transition-all hover:cursor-pointer"
        >
          <div className="flex justify-center  py-2">
            <Image
              width={5000}
              height={4000}
              src={dev.img}
              alt={dev.name}
              lazyload="true"
              className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <h3 className="font-semibold text-xl group-hover:text-white transition-all">
              {dev.name}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Director de diseño
            </p>
            <div className="flex items-center">
              <a
                href="#"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <ImFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <BsGithub />
              </a>
              <a
                href="#"
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Devs;
