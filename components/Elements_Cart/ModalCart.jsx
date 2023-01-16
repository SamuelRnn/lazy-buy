import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart";
import { useEffect } from "react";

const ModalCart = ({ active, setActive }) => {
  useEffect(() => {
    const scapelistener = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setActive(false);
    };
    // document.body.style.overflow = "hidden";
    document.addEventListener("keydown", scapelistener);
    return () => {
      document.removeEventListener("keydown", scapelistener);
      // document.body.style.overflow = "normal";
    };
  });
  return (
    <>
      <AnimatePresence>
        {active && (
          <div>
            <motion.div
              onClick={() => {
                setActive(false);
                setTimeout(() => (document.body.style.overflow = ""), 400);
              }}
              className="fixed top-0 right-0 w-full h-screen flex justify-start p-6 items-start modal_bg z-50"
              initial={{ x: 0, opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            ></motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 100 }}
              exit={{ x: 500 }}
              transition={{ delay: 0.1, lease: "anticipate" }}
              className="cart_modal bg-zinc-100"
            >
              <Cart setActive={setActive} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
