import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const SuccessComponent = ({ btn }) => {
  const router = useRouter();
  let arr = [
    "md:block hidden fixed h-full -left-20 -bottom-20",
    "md:block hidden fixed h-full -left-20 -top-28",
    "md:block hidden fixed h-full -right-20 -bottom-20",
    "md:block hidden fixed h-full -right-20 -top-28",
    "md:block hidden fixed h-full  ",
  ];
  return (
    <div className="h-screen w-screen flex md:flex-row flex-col bg-white items-center justify-center">
      <div className="w-4/5 flex items-center md:justify-end  z-50">
        <div className="md:mr-10 pay gap-5 flex flex-col items-center p-11 justify-end  rounded-3xl shadow-lg">
          <Image
            width={200}
            height={200}
            className="w-28"
            src="https://drikung.cl/wp-content/uploads/2020/06/Pago-exitoso.png"
            alt="succes"
          />

          <h1 className="text-fondo-1000 mx-7 text-4xl ">Payment Successful!!</h1>
          <h2 className="text-zinc-500">Thank you for choosing us</h2>

          {btn && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              type="button"
              onClick={() => router.push("/")}
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              Back to Site
            </motion.button>
          )}
          {!btn && <div className="h-11"> </div>}
        </div>
      </div>
      <div className="w-3/5 z-40">
        <Image
          width={200}
          height={200}
          src="https://images.vexels.com/media/users/3/210362/isolated/preview/44acab728548ca17f29211eeda51f2e3-hombre-reclinado-con-caracter-de-telefono-celular.png"
          alt="men"
          className="-scale-x-100 md:block hidden w-[380px]"
        />
      </div>
      {arr?.map((str, i) => (
        <motion.img
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [1, 0.5, 0, 0.5, 1] }}
          transition={{ delay: 0.2, type: "spring", stiffness: 1000 }}
          className={str}
          src="https://png.pngtree.com/png-clipart/20211128/original/pngtree-confetti-vector-png-for-festival-free-colorful-tinsel-explosion-on-transparent-png-image_6953842.png"
          alt="img"
        />
      ))}
    </div>
  );
};

export default SuccessComponent;
