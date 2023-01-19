import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Acordeon = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => {
          setExpanded(isOpen ? false : i);
        }}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={i}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
          >Soy el Nº: {i}</motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Acordeon;
