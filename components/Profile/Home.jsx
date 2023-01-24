import Link from "next/link";
import Image from "next/image";
import det  from "../../public/dashdet2.png"

const Home = () => {
  return <>
  <section id="welcome">
        <div className="container flex  lg:flex-row items-center px-6 mx-auto mt-10 space-y-0 lg:space-y-0">
          <div className="flex flex-row mb-12 space-y-12 lg:w-1/2 md:items-center lg:items-start">
            <h1 className="max-w-md text-4xl font-bold text-center lg:text-left xl:text-5xl text-fondo-200">
              Congratulations on becoming a new Lazy-Seller, now it&apos;s time
              to make the next step!
            </h1>
            <p className="max-w-sm text-center text-fondo-100 lg:text-left">
              In Lazy-Buy we now that you&apos;re putting all your effort to
              make your business grow. And that&apos;s why we designed this web
              site specially made for you and your company. But being a part of
              our lazy-sellers it&apos;s only the first step!
            </p>
          </div>

          <div className="pr-5 pb-6 lg:w-1/2 lg:pb-24 xl:pb-32">
            <Image
              className=""
              src={det}
              alt="image"
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
      
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 lg:space-y-0 lg:flex-row mb-10">
          <div className="flex flex-col space-y-12 lg:w-1/2 md:items-center lg:items-start">
            <h2 className="max-w-md text-4xl font-bold text-center lg:text-4xl lg:text-left xl:text-5xl text-fondo-200">
              {"What's the difference about manage your own virtual office"}
            </h2>
            <p className="max-w-sm text-center text-fondo-200 lg:text-left">
              Running a business can be challenging, but it doesn&apos;t have to
              be. One solution that can make things easier for you is a virtual
              office. A virtual office is a service that provides you with a
              professional business address, mail handling and call answering
              services, without the need for a physical office space. Choosing a
              virtual office can bring many benefits to your business. <br />
              <br />
              Firstly, it can save you money on overhead costs. With a virtual
              office, you don&apos;t have to worry about paying rent and
              utilities for a physical office space. You can also save on office
              supplies and furniture. This can free up more of your budget to
              invest in other areas of your business. Additionally, a virtual
              office can provide you with a prestigious business address, which
              can help to enhance your company&apos;s image and credibility.
            </p>
          </div>
          </div>
      </section>

      <section id="testimonials" className="my-12">
        {/* Heading and testimonials container */}
        <div className="max-w-6xl px-5 mx-auto mt-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-fondo-200">
            What&apos;s different about your own virtual office
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col space-y-12 mt-24 lg:space-y-0 lg:flex-row lg:space-x-6">
            {/* Testimonie 1 */}
            <div className="flex flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Liza Cudrow</h5>
              <p className="text-sm text-zinc-100">
                Have my own virtual office, provided me with the full control I
                nedeed to grow my business
              </p>
            </div>

            <div className="hidden flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:flex lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Samwise Gamyi</h5>
              <p className="text-sm text-zinc-100">
                Since I sell my products in Lazy-Buy, my number of customers has
                increased a lot and also I can track their tastes about my
                products
              </p>
            </div>

            <div className="hidden flex-col space-y-2 items-center p-6 rounded-lg bg-fondo-100 lg:flex lg:w-1/3 shadow-lg">
              <Image
                width={500}
                height={500}
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                className="rounded-full shadow-lg w-32 -mt-14"
                alt="avatar"
              />
              <h5 className="text-lg font-bold text-zinc-50">Arwen Udromiel</h5>
              <p className="text-sm text-zinc-100">
                I&apos;ve never thought been a lazy-seller could make this
                awesomes changes in my work style. Now I can control my numbers
                and also increase them!
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
};

export default Home;

