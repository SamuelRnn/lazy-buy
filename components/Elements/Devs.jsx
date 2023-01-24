/* eslint-disable react/jsx-no-target-blank */
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const integrantes = [
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673462486/lazy-buy/Modarelli_Franco_s4dugd.jpg",
    name: "Franco",
    linkedIn: "https://www.linkedin.com/in/francomodarelli/",
    github: "https://github.com/ModarelliFranco",
    roll: "Full-Stack Developer"
  },
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673145980/lazy-buy/103448999_f82g57.jpg",
    name: "Brayan",
    linkedIn: "https://www.linkedin.com/in/brayan-bravo-ramos56/",
    roll: "Full-Stack Developer"
  },
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673147022/lazy-buy/Imagen_de_WhatsApp_2023-01-07_a_las_21.57.07_enidiz.jpg",
    name: "Juampi",
    linkedIn: "https://www.linkedin.com/in/juan-pablo-matarazzo-202409224/",
    roll: "Full-Stack Developer"
  },
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673146181/lazy-buy/fotoSamuel_rbdz1h.jpg",
    name: "Samuel",
    linkedIn: "https://www.linkedin.com/in/sam-p-quino/",
    github: "https://github.com/SamuelRnn",
    roll: "Full-Stack Developer"
  },
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673145993/lazy-buy/65221822_378571466127530_2046529064859122346_n.jpg_qrpfrc.jpg",
    name: "Agus",
    linkedIn: "https://www.linkedin.com/in/agustin-delfino/",
    roll: "Full-Stack Developer"
  },
  {
    img: "https://res.cloudinary.com/dl5hwebwa/image/upload/v1673146286/lazy-buy/Sojo_d0lgxo.jpg",
    name: "Sojo",
    linkedIn: "https://www.linkedin.com/in/fabi%C3%A1n-sojo-2a92a7224/",
    roll: "Full-Stack Developer"
  },
];
const Devs = () => {
  return (
    <>
      {integrantes.map((dev) => (
        <div
          key={dev.name}
          className="bg-zinc-100 px-1 md:px-2 md:my-auto my-5 hover:bg-fondo-400 group rounded-lg shadow hover:shadow-lg hover:shadow-fondo-400 transition-all hover:cursor-pointer pt-3"
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
            <p className="text-gray-600 text-sm group-hover:text-gray-300">
            {dev.roll}
            </p>
            <div className="flex items-center">
              <a
                href={dev.github || "#"}
                target="_blank"
                className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
              >
                <BsGithub />
              </a>
              <a
                href={dev.linkedIn || "#"}
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
