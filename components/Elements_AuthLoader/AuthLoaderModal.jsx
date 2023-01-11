import Spinner from "../Spinners/Spinner";
import { AnimatePresence, motion } from "framer-motion";

const AuthLoaderModal = ({ loadingToggle }) => {
  return (
    <AnimatePresence>
      {loadingToggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="modal_bg absolute h-screen w-full text-zinc-50 grid place-content-center"
        >
          <div className="flex gap-6 flex-wrap text-lg items-center font-semibold shadow-lg p-10 bg-zinc-800 rounded-lg shadow-zinc-600">
            <Spinner />
            Validating credentials...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthLoaderModal;
