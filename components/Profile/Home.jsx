import Link from "next/link";
import Image from "next/image";
import pic from "../../public/userpic.png";

const Home = () => {
  return (
    <>
      <section id="welcome">
        <div className="container flex flex-col lg:flex-row items-center md:px-6 mx-auto mt-10 space-y-0 lg:space-y-0">
          <div className="flex flex-col mb-12 space-y-12 lg:w-1/2 justify-center items-center">
            <h1 className="max-w-md text-4xl font-bold text-center lg:text-left xl:text-5xl text-fondo-200">
              Welcome to your user Profile, check out all the features!
            </h1>
            <p className=" text-center text-fondo-100 lg:text-left">
              In Lazy-Buy we now that you&apos;re entusiasm to find the products
              you always wanted. And that&apos;s why we designed this web site
              specially made for you.
              <br />
              In Lazy-Buy we now that you&apos;re entusiasm to find the products
              you always wanted. And that&apos;s why we designed this web site
              specially made for you.
            </p>
          </div>

          <div className="md:pr-5 lg:pb-6 lg:w-1/2">
            <Link
              href="/"
              className="flex flex-col justify-center items-center gap-4 cursor-pointer"
            >
              <Image
                className="w-[300px] md:w-[500px]"
                src={pic}
                alt="image"
                height={500}
                width={500}
              />
              <h2 className="bg-fondo-200 p-2 rounded-full text-lg text-zinc-100 font-semibold mr-4">
                Back to store
              </h2>
            </Link>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container flex flex-col mx-auto mt-10 space-y-12 lg:space-y-0 lg:flex-row mb-10 w-[90%]">
          <div className="flex flex-col space-y-12 md:items-center lg:items-start">
            <h2 className="text-4xl font-bold text-center lg:text-4xl lg:text-left xl:text-5xl text-fondo-200 w-full">
              {"What's the importance of having your transaction details"}
            </h2>
            <div className="flex gap-2">
              <p className="text-jutify text-fondo-200 w-1/2">
                Running a business can be challenging, but it doesn&apos;t have
                to be. One solution that can make things easier for you is a
                virtual office. A virtual office is a service that provides you
                with a professional business address, mail handling and call
                answering services, without the need for a physical office
                space. Choosing a virtual office can bring many benefits to your
                business.
              </p>
              <p className=" text-justify text-fondo-200 w-1/2">
                Firstly, it can save you money on overhead costs. With a virtual
                office, you don&apos;t have to worry about paying rent and
                utilities for a physical office space. You can also save on
                office supplies and furniture. This can free up more of your
                budget to invest in other areas of your business. Additionally,
                a virtual office can provide you with a prestigious business
                address, which can help to enhance your company&apos;s image and
                credibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
