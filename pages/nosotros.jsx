import Image from "next/image";
import Layout from "../components/layout";

const About = () => {
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
  return (
    <Layout>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-8/12 ">
            <Image
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
              height={315}
              width={733}
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="font-normal text-base leading-6 text-zinc-700 ">
              <h3 className="text-3xl lg:text-4xl font-bold leading-9 text-fondo-400 pb-4">
                <span className="text-fondo-500 uppercase">Lazzy Buy</span> is
                carried out by passionate developers.
              </h3>
              Lazzy Buy is a project made by a group of 7 students from Henry
              Bootcamp The project is based on creating a full functional
              website. In our case, we decided to make a kind of e-commerce
              including our own payment method implemented on the main app. In
              this project we were working with the following technologies:
              Next.JS, JSX, Tailwind & Prisma.
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-fondo-500 pb-4">
              Meet the team
            </h1>
            <p className="font-normal text-base leading-6 text-zinc-700 ">
              Our team is compose by a group of 7 students from Henry Bootcamp
              The project is based on creating a full functional website. In our
              case, we decided to make a kind of e-commerce including our own
              payment method implemented on the main app. In this project we
              were working with the following technologies: Next.JS, JSX,
              Tailwind & Prisma.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              {integrantes.map((dev) => (
                <div
                  key={dev.name}
                  className="p-4 pb-6 flex justify-center flex-col items-center"
                >
                  <Image
                    width={50}
                    height={50}
                    className="md:block hidden"
                    src={dev.img}
                    alt="dev img"
                  />
                  <Image
                    width={200}
                    height={100}
                    className="md:hidden block"
                    src={dev.alt_img}
                    alt="dev img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    {dev.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
