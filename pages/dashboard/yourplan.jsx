import React from "react";
import DashboardNav from "../../components/Elements_Dashboard/DashboardNav";
import Image from "next/image";
import plan from "../../public/plans.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

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
      detail: "This plan is designed for those companies that are trying to make the next step to grow",
      price: "USD " + 49 + "/month",
      extendDetail: "The Standard plan is designed for businesses that are ready to take their sales to the next level. With the same duration as the Basic plan, the Standard plan offers more slots for products to be sold, allowing you to expand your inventory and reach a larger audience. You'll have access to advanced features and capabilities that will help you streamline your sales.",
    },
    {
      title: "Basic",
      detail: "This plan is designed for those companies that are making their first steps",
      price: "USD " + 0 + "/month",
      extendDetail: "The Basic plan is a great starting point for anyone looking to try out our platform. It's completely free and offers a one-month duration. With the Basic plan, you'll have access to the core features of our platform, allowing you to test the waters and see if it's a good fit for your business.",
    },
    {
      title: "Premium",
      detail: "This plan is designed for those companies that want full efficiency to reach their maximum potential",
      price: "USD " + 99 + "/month",
      extendDetail: "The Premium plan is the ultimate solution for businesses that want to take their sales to new heights. With an extended duration, this plan offers the most number of slots for products to be sold, allowing you to expand your inventory and reach an even larger audience. It also offers the most advanced features and capabilities on our platform.",
    },
  ];

  return (
    <>
      <DashboardNav />
      <section className="flex flex-col gap-4 mt-8 p-6 text-center md:text-left">
        <h2 className="text-5xl font-semibold text-fondo-200">
          Check out the specifics of your plan and more!
        </h2>
        <div className="mt-2 flex items-center flex-col-reverse md:flex-row">
          <p className="text-2xl text-slate-600 md:text-left md:w-1/2">
            Here in Lazy-Buy we designed three company plans that were made
            specially for your company. We know that make the next step to grow
            your company sometimes can be hard, and that&apos;s why we have a
            subscription plan that adjust itself to your economy depending the
            type of business you have.
          </p>

          <Image
            width={700}
            height={700}
            className="md:w-1/2"
            src={plan}
            alt="CONCHA"
          ></Image>
        </div>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-fondo-300 ml-4">Click the cards for more details:</h2>
        <motion.div id="plans" className="flex flex-col lg:flex-row w-full gap-2 p-4 justify-center">
          {plans.map((plan, index) => {
            const isActive = index === rotate;
            return (
              <AnimatePresence key={index}>
                <motion.div  className="flex mt-4 justify-center w-[90%] mx-auto">
                  <motion.div
                    variants={variants}
                    onClick={() => {
                      setRotate(isActive ? false : index);
                    }}
                    animate={isActive ? "frente" : "dorso"}
                    transition={{ duration: 0.6 }}
                    className={`w-full h-[250px] bg-fondo-200 shadow-lg ${
                      isActive ? "block" : "hidden"
                    } flex flex-col justify-evenly text-center items-center text-white font-bold cursor-pointer rounded-lg`}
                  >
                    <h2 className="text-white text-3xl">{plan.title}</h2>
                    <p className="w-[90%]">{plan.detail}</p>
                    <h3 className="text-4xl">{plan.price}</h3>
                  </motion.div>

                  <motion.div
                    onClick={() => {
                      setRotate(isActive ? true : index);
                    }}
                    variants={variants}
                    animate={isActive ? "frente" : "dorso"}
                    transition={{ duration: 0.6 }}
                    className={`w-full h-[250px] bg-slate-500 ${
                      isActive ? "hidden" : "block"
                    } flex flex-col justify-evenly text-center items-center text-white font-bold cursor-pointer p-4 rounded-lg`}
                  >
                    <h2 className="text-xl md:text-2xl">With your {plan.title} plan</h2>
                    <p className="text-xs lg:text-sm">{plan.extendDetail} </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </section>
      <section>
        <div className="p-3 w-full gap-4 bg-fondo-300 min-h-[100px] flex flex-col lg:flex-row items-center justify-evenly mt-10">
          <h2 className="lg:text-4xl text-xl text-white font-bold">Find the way to upgrade your business</h2>
          <Link className="text-white font-semibold lg:text-lg bg-slate-400 p-1 md:p-3 rounded-xl hover:bg-fondo-50 hover:text-slate-500 transition-all" href="/dashboard/plan">Upgrade Now!</Link>
        </div>
      </section>
    </>
  );
};

export default YourPlan;
