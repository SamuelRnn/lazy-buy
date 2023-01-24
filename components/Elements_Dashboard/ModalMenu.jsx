import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const ModalMenu = ({ showModal, setShowModal }) => {
  const route = useRouter();

  const variants = {
    hidden: { opacity: 0, transition: {duration: 0.2}},
    visible: { opacity: 1, scale: [0, 1], rotate: [90, 0]},
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="bg-slate-700 shadow-md w-[90%] gap-2 left-5 rounded-xl absolute mt-8 h-[100px] flex flex-col items-center justify-center text-white font-semibold py-20 over md:hidden"

        >
          <Link href="/dashboard/faqs">FAQ&apos;s</Link>
          <Link href="/dashboard/faqs">Support</Link>
          <Link href="/dashboard/yourplan">Your plan</Link>
          {route.pathname !== "/dashboard" && (
            <Link href="/dashboard">Home</Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMenu;
