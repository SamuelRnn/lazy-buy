import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-fondo-50 w-full py-8">
      <div className="main grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
        <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-fondo-400 ">Lazy Buy</h1>
          <p className="text-gray-600 text-justify ">
            Lazy Buy is an e-commerce platform developed by a team of highly
            skilled six programmers, it focuses on providing an easy and
            accessible platform for both the seller and the customer, offers an
            intuitive interface, management tools, secure payment system and
            aims to provide a pleasant and satisfactory shopping experience for
            all users.
          </p>
        </div>
        <div className="md:col-span-4 xl:col-span-2">
          <h2 className="font-bold text-fondo-400 mb-6 uppercase">Menu</h2>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:underline hover:text-fondo-300">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:text-fondo-300"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold text-fondo-400 mb-6 uppercase">
            Social Media
          </h2>
          <nav>
            <a
              href="https://www.facebook.com/profile.php?id=100089361346783"
              className="flex items-center gap-2 my-1 hover:underline hover:text-fondo-300 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={20}
                height={20}
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                className="w-[20px] h-[20px]"
                alt="JT Devs"
              />
              Lazy Buy @official
            </a>
            <a
              href="https://www.instagram.com/lazybuy23/"
              className="flex items-center gap-2 my-1 hover:underline hover:text-fondo-300 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={20}
                height={20}
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                className="w-[20px] h-[20px]"
                alt="JT Devs"
              />
              Lazy Buy
            </a>
            <a
              href="https://twitter.com/Lazy_Buy23"
              className="flex items-center gap-2 my-1 hover:underline hover:text-fondo-300 p-2"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={20}
                height={20}
                src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png"
                className="w-[20px] h-[20px]"
                alt="JT Devs"
              />
              Lazy Buy@devs
            </a>
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold text-fondo-400 mb-6 uppercase">Contact</h2>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-fondo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Buenos Aires, Argentina
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-fondo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              lazy_buy@gmail.com
            </p>
            <Link href='tel:+5491123376862' className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-fondo-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              (+54) 9 11 23 37 68 62
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4">
        <hr className="main" />
      </div>
      <div className="main">
        <p className="text-gray-800 text-center w-full">
          &copy; 2023
          <span className="text-gray-900 font-bold text-center">
            {" Lazy buy"}
          </span>{" "}
          | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
