import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiArrowDownCircle } from "react-icons/hi2";
import faq from "../../public/faq.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DashboardNav from "../../components/Elements_Dashboard/DashboardNav";

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const acordeonContent = [
    {
      title: "How can I sell more products",
      content:
        "Improve your product visibility, optimize your website for conversions, and promote your products through various marketing channels to increase sales.",
    },
    {
      title: "How can I see my stats",
      content:
        "Utilize analytics and metrics to identify trends and customer behavior, make data-driven decisions, and continually optimize your strategies to improve performance and drive growth",
    },
    {
      title: "How long can I stay as basic seller",
      content:
        "There is no set time limit for being a basic seller, but to increase sales and grow your business it is recommended to upgrade to a higher level of selling as soon as possible.",
    },
    {
      title: "How do I optimize my listings to increase visibility",
      content:
        "There is no set time limit for being a basic seller, but to increase sales and grow your business it is recommended to upgrade to a higher level of selling as soon as possible.",
    },
  ];

  return (
    <div className="bg-zinc-50">
      
    <DashboardNav/>
      <section id="presentation">
        <div className="flex flex-col-reverse items-center p-2 space-y-2 lg:flex-row my-8">
          <div className="flex flex-col gap-4 text-center p-3 lg:w-1/2">
            <h2 className="text-5xl text-fondo-300 font-bold">
              These are the most asked questions:{" "}
            </h2>
            <p className="text-center text-fondo-200 font-semibold text-lg">
              Because we know that when you start something new, sometimes new
              means a little confusing. That&apos;s why we prepare this section
              specially for you.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className=""
              src={faq}
              width={500}
              height={500}
              alt={"faqs"}
            ></Image>
          </div>
        </div>
      </section>

      <section id="acordeon">
        <div className="overflow-hidden flex flex-col w-[90%] lg:w-[80%] mx-auto text-xl lg:text-xl bg-white text-zinc-100 rounded-lg text-center">
          <div className="bg-fondo-300 p-6">
            <h2 className="text-zinc-100 text-4xl lg:text-3xl text-center font-semibold">
              Check Out:{" "}
            </h2>
          </div>

          {acordeonContent.map((ac, i) => {
            const isOpen = i === expanded;
            return (
              <>
                <motion.header
                  className="p-4 border border-b-1 bg-gray-400 cursor-pointer"
                  initial={false}
                  animate={{
                    backgroundColor: isOpen ? "#1F2937" : "#9CA3AF",
                  }}
                  onClick={() => {
                    setExpanded(isOpen ? false : i);
                  }}
                >
                  {ac.title}
                </motion.header>

                <AnimatePresence>
                  {isOpen && (
                    <motion.section
                      className="overflow-hidden"
                      key={i}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        variants={{
                          open: { scale: 1 },
                          collapsed: { scale: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="p-4 text-xl text-slate-500 border border-b-2">
                          {ac.content}
                        </p>
                      </motion.div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex flex-col space-y-4 items-center mt-6 p-3 bg-fondo-300 lg:flex-row lg:justify-around lg:p-8">
          <h2 className="text-2xl text-white text-center lg:text-3xl">
            You can always make things better!
          </h2>
          <Link
            className="bg-fondo-200 w-[50%] text-white font-semibold p-3 rounded-full text-center lg:w-[20%] lg:items-center lg:p-4"
            href="/dashboard/plan"
          >
            Upgrade
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
