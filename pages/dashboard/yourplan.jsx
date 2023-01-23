import React from "react";
import DashboardNav from "../../components/Elements_Dashboard/DashboardNav";
import Image from "next/image";
import plan from "../../public/plans.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const YourPlan = () => {
  const [rotate, setRotate] = useState(false);
  console.log(rotate);

  const variants = {
    frente: {
      rotateY: [180, 0]
    },
    dorso: {
      rotateY: [180, 0],
    },
  };

  const plans = [
    {
      title: "Standard",
      detail: "Lorem Ipsum",
      price: "USD" + 0,
      extendDetail: "LOREM LAROCA",
    },
    {
      title: "Basic",
      detail: "Lorem Ipsum",
      price: "USD" + 49,
      extendDetail: "LOREM LAROCA",
    },
    {
      title: "Premium",
      detail: "Lorem Ipsum",
      price: "USD" + 99,
      extendDetail: "LOREM LAROCA",
    },
  ];

  return (
    <>
      <DashboardNav />
      <section className="flex flex-col gap-4 mt-8 p-6">
        <h2 className="text-5xl font-semibold text-fondo-200">
          Check out the specifics of your plan and more!
        </h2>
        <div className="mt-2 flex items-center w-full">
          <p className="text-2xl text-slate-600 text-left w-1/2">
            Here in Lazy-Buy we designed three company plans that were made
            specially for your company. We know that make the next step to grow
            your company sometimes can be hard, and that&apos;s why we have a
            subscription plan that adjust itself to your economy depending the
            type of business you have.
          </p>

          <Image
            width={700}
            height={700}
            className="w-1/2"
            src={plan}
            alt="CONCHA"
          ></Image>
        </div>
      </section>
      <section>
        <motion.div id="plans" className="flex w-full gap-2 p-4 justify-center">
          {plans.map((plan, index) => {
            const isActive = index === rotate;
            return (
              <AnimatePresence>
                <motion.div className="flex mt-8 justify-center w-1/3">
                  <motion.div
                    variants={variants}
                    onClick={() => {
                      setRotate(isActive ? false : index);
                    }}
                    animate={isActive ? "frente" : "dorso"}
                    transition={{ duration: 0.6 }}
                    className={`w-full h-[250px] bg-fondo-700 ${
                      isActive ? "block" : "hidden"
                    } flex flex-col justify-center items-center text-white font-bold cursor-pointer`}
                  >
                    <h2>{plan.title}</h2>
                    <p>{plan.detail}</p>
                    <h3>{plan.price}</h3>
                  </motion.div>

                  <motion.div
                    onClick={() => {
                      setRotate(isActive ? true : index);
                    }}
                    variants={variants}
                    animate={isActive ? "frente" : "dorso"}
                    transition={{ duration: 0.6 }}
                    className={`w-full h-[250px] bg-fondo-700 ${
                      isActive ? "hidden" : "block"
                    } flex flex-col justify-center items-center text-white font-bold cursor-pointer`}
                  >
                    <h2>With your: {plan.title} plan</h2>
                    <p>You can afford, </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default YourPlan;

// {
//   /* <motion.div className="flex mt-8 justify-center w-1/3">
//             <motion.div
//               onClick={handleClick}
//               variants={variants}
//               animate={rotate ? "frente" : "dorso"}
//               transition={{ duration: 0.6 }}
//               className={`w-full h-[250px] bg-fondo-700 ${
//                 rotate ? "block" : "hidden"
//               } flex justify-center items-center text-white font-bold cursor-pointer`}
//             >
//               1
//             </motion.div>

//             <motion.div
//               onClick={handleClick}
//               variants={variants}
//               animate={rotate ? "dorso" : "frente"}
//               transition={{ duration: 0.6 }}
//               className={`w-full h-[250px] bg-fondo-700 ${
//                 rotate ? "hidden" : "block"
//               } flex justify-center items-center text-white font-bold cursor-pointer`}
//             >
//               2
//             </motion.div>
//           </motion.div> */
// }
