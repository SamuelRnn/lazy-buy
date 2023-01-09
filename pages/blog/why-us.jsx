import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyUs = () => {
  return (
    <>
      <NavBar />
      <div className="bg-zinc-100 grid grid-rows-1 gap-5 p-3 sm:gap-6 md:gap-2 lg:grid-cols-2 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-fondo-50 rounded-3xl p-6 flex flex-col justify-between items-center sm:text-2xl sm:p-5"
        >
          <h2 className="text-fondo-500 font-semibold content-center text-2xl sm:text-3xl">
            Why sell with us?
          </h2>
          <article className="text-black text-justify text-base">
            At our marketplace, we are dedicated to providing a reliable and
            trustworthy platform for both buyers and sellers. We understand the
            importance of ease and convenience, which is why we have designed a
            modern and visually appealing interface that makes it easy for
            sellers to list their products and for buyers to find exactly what
            they're looking for.
          </article>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-fondo-100 rounded-full flex justify-center sm:bg-transparent"
        >
          <Image
            className="rounded-full sm:w-[450px] md:w-[490px]"
            src="https://assets.entrepreneur.com/content/3x2/2000/20150316052356-shutterstock-232609255.jpeg"
            width={500}
            height={500}
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-fondo-50 rounded-3xl p-6 flex flex-col justify-between items-center sm:text-2xl sm:p-5"
        >
          <h2 className="text-fondo-500 font-semibold content-center text-2xl sm:text-3xl">
            Not sure yet?
          </h2>
          <article className=" text-black text-justify">
            Our passionate team of developers has put love and care into every aspect of our platform, ensuring that it is constantly evolving and improving to meet the needs of our community. When you sell with us, you can rest assured that you are in good hands. So why wait? Start selling with us today and join the thousands of satisfied sellers on our platform!
          </article>
        </motion.div>
        <motion.div
          initial={{}}
          animate={{}}
          transition={{ duration: 0.5 }}
          className="bg-fondo-100 rounded-full flex justify-center sm:bg-transparent"
        >
          <Image
            className="rounded-full sm:w-[450px] md:w-[500px]"
            src="https://www.thedigitalsalesinstitute.com/wp-content/uploads/2018/09/what-is-selling-definition.jpeg"
            width={500}
            height={500}
          ></Image>
        </motion.div>
      </div>
      <Footer />
    </>
    <div>
      <NavBar />
      <div>
        <motion.div
          initial={{ x: -500, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="px-7 my-3"
        >
          <h2 className="text-2xl text-fondo-300">
            Why start selling your products in Lazy-Buy:{" "}
          </h2>
        </motion.div >
        <motion.div
        initial={{x: 3000, opacity: 0}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 2}}
         className="flex p-2 ">
          <Image className="mx-2"
            src="https://www.novagric.com/images/empresa/trabaja-con-nosotros.jpg"
            alt="article"
            width={650}
            height={650}
          ></Image>
          <article className="my-2">
            <h3>Take your business to the next level:</h3>
            <p>Here in :</p>
          </article>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyUs;
