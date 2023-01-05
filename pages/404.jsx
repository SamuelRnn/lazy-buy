import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

const errorPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Router = useRouter();
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div className=" lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-fondo-400 font-bold text-2xl">
                Looks like you&apos;ve found the doorway to the great nothing
              </h1>
              <p className="my-2 text-fondo-300">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button
                onClick={handleClick}
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-fondo-300 text-white ease-out duration-300 hover:-translate-x-2 "
              >
                Back to Home
              </button>
            </div>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              src="https://i.imgur.com/hU0gTOk.png"
              object-fit="cover"
              alt="404"
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          width={600}
          height={600}
          src="https://i.imgur.com/qBZxKBt.png"
          object-fit="cover"
          alt="disconnected"
        />
      </div>
    </div>
  );
};

export default errorPage;
