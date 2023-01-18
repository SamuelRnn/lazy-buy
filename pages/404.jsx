import Layout from "../components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => router.push("/"), 5000);
    return () => {
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout noLayout={true} title="Page not Found!">
      <div className=" lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-fondo-400 font-bold text-2xl">
                  Looks like you found something that shouldn&apos;t be found...
                </h1>
                <p>In seconds you will be redirected</p>
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
