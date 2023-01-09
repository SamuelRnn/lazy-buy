import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyUs = () => {
  return (
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
