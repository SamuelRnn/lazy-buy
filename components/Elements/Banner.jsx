import Link from "next/link";

function Banner() {
  return (
    <div
      className="w-full min-h-[400px] bg-center bg-cover bg-no-repeat relative 
      bg-[url(https://www.novagric.com/images/empresa/trabaja-con-nosotros.jpg)]"
    >
      <div className="absulute w-full h-full min-h-[400px] bg-opacity-50 bg-zinc-800 pt-[80px] pb-12">
        <div className="main flex flex-col">
          <h2 className="text-[50px] text-white font-semibold leading-[70px]">
            ¿Why start selling with us?
          </h2>
          <Link href={"/blog/why-us"}>
            <button className="align-self-end w-auto mt-12 my-2 rounded py-5 px-8 bg-fondo-300 text-white ease-out duration-300 hover:bg-fondo-400 max-sm:w-full">
              Read this article
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
