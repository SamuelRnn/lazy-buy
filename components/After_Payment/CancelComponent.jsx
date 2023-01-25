import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const CancelComponent = ({ btn }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex md:flex-row flex-col bg-white items-center justify-center">
      <div className="w-4/5 flex items-center justify-center z-50">
        <div className=" w-screen gap-5 flex flex-col items-center p-11 justify-end  rounded-3xl shadow-lg">
          <Image
            width={200}
            height={200}
            className="w-28"
            src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
            alt="cancel"
          />
          <h1 className="text-red-700 mx-10 text-4xl">Payment Error!!</h1>
          <h2 className="text-zinc-500">
            We&apos;re sorry your payment has been declined
          </h2>
          {btn && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              type="button"
              onClick={() => router.push("/")}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-700 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Back to Site
            </motion.button>
          )}
          {!btn && <div className="h-11"> </div>}
        </div>
      </div>
    </div>
  );
};

export default CancelComponent;
