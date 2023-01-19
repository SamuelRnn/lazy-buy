import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiArrowDownCircle } from "react-icons/hi2";
import faq from "../../public/faq.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = () => {
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
  ];

  return (
    <div className="bg-fondo-50">
      <nav className="bg-fondo-300 p-2 text-white font-semibold flex justify-around">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full w-16 h-16 object-cover lg:w-24 lg:h-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDdlJ9bo7f5d6w82MI6NQiaiiVFiDj7AwAQ&usqp=CAU"
            width={1000}
            height={1000}
            alt="profile"
          ></Image>
          <h2>Armando Mendozas</h2>
        </div>

        <div className="hidden gap-3 lg:flex items-center">
          <Link href="#">Support</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Your Plan</Link>
        </div>
        <div className="flex items-center text-3xl lg:hidden">
          <HiBars3 />
        </div>
      </nav>

      <section id="presentation">
        <div className="flex flex-col-reverse items-center p-2 space-y-2 lg:flex-row">
          <div className="flex flex-col gap-4 text-center p-3 lg:w-1/2">
            <h2 className="text-5xl text-fondo-300 font-bold">
              These are the most asked questions:{" "}
            </h2>
            <p className="text-center text-fondo-200 font-semibold text-lg">
              Because we know that when you start something new, sometimes new
              means a little confusing. That's why we prepare this section
              specially for you.
            </p>
          </div>
          <div className="w-1/2">
            <Image className="" src={faq} width={500} height={500}></Image>
          </div>
        </div>
      </section>

      <section id="acordeon">
        <div className="flex flex-col w-[90%] mx-auto text-3xl bg-fondo-100 text-fondo-50 mb-24">
          <div className="bg-fondo-300 p-6">
            <h2 className="text-white text-3xl text-center">DON'T BE SHY!</h2>
          </div>

          {acordeonContent.map((ac, i) => {
            const isOpen = i === expanded;
            return (
              <>
                <motion.header
                  initial={false}
                  animate={{
                    backgroundColor: isOpen ? "#e29c9c" : "#cb4d4d",
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
                        <p className="p-4">{ac.content}</p>
                      </motion.div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default faqs;
