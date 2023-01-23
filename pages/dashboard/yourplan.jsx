import React from "react";
import DashboardNav from "../../components/Elements_Dashboard/DashboardNav";
import Image from "next/image";
import plan from "../../public/plans.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

const YourPlan = () => {
  const x = useMotionValue(0);
  const xInput = [-300, 0, 300];
  const background = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);

  const radius = useTransform(x, xInput, [
    "white",
    "green",
    "black",
  ]);

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

          <Image width={700} height={700} className="w-1/2" src={plan}></Image>
        </div>
      </section>
      <section>
        <motion.div
          className="p-6 flex gap-2 justify-center"
          
        >
          <motion.div
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            className="w-1/3 h-[300px] bg-slate-500 flex justify-center items-center"
          >
            <motion.div
              style={{radius}}
              className="bg-fondo-50 w-[50%] h-[50%] flex items-center justify-center"
            >
              PROBANDO
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default YourPlan;
