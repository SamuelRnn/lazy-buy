import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => router.push("/"), 5000);
    return () => {
      clearTimeout(id);
      console.log("me voy");
    };
  }, []);
  return (
    <Layout noLayout={true} title="Página no encontrada!">
      <div className=" lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-fondo-400 font-bold text-2xl">
                  Parece que encontraste algo que no debía ser encontrado...
                </h1>
                <p>Se te redigirá en un par de segundos</p>
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
    </Layout>
  );
};

export default ErrorPage;
