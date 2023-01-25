import Layout from "../components/MainLayout";
import Devs from "../components/Elements/Devs";
import Image from "next/image";

const About = () => {
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
                <span className="text-fondo-500 uppercase">Lazy Buy</span> is
                carried out by passionate developers.
              </h3>
              Lazy Buy is a project made by a group of 6 students from Henry
              Bootcamp. The project is based on creating a fully functional
              website. In our case, we decided to create an e-commerce that
              includes an intuitive interface, management tools, secure payment
              system, and aims to provide a pleasant and satisfactory shopping
              experience for all users. In this project, we worked with the
              following technologies: Next.JS, JSX, Tailwind, and Prisma.
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-fondo-500 pb-4">
              Meet the team
            </h1>
            <p className="font-normal text-base leading-6 text-zinc-700 ">
              Our team is composed of 6 highly skilled and passionate
              developers. They have a great ability to work in a team and
              collaborate on complex projects. Additionally, they have a great
              knowledge of web development technologies and tools, which allows
              them to create innovative and efficient solutions. Their passion
              for development is reflected in their focus on creating
              high-quality products. They are committed to providing exceptional
              service to their clients and exceeding their expectations.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="flex flex-row items-center rounded-md  justify-center flex-wrap gap-4 md:gap-5 p-1 md:p-5">
              <Devs />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
