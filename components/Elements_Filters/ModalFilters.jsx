import Filters from "./Filters";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";

const ModalFilters = ({
  active,
  setActive,
  setFilters,
  setActiveFiltersModal,
  filters,
  productos,
}) => {
  return (
    <>
      <AnimatePresence>
        {active && (
          <div>
            <motion.div
              onClick={() => setActive(false)}
              className="fixed top-0 right-0 w-full h-screen flex justify-end p-6 items-start modal_bg"
              initial={{ x: 0, opacity: 0 }}
              animate={{ opacity: 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <motion.button
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ duration: 0.5 }}
                className="h-12 w-12 grid place-content-center"
                onClick={() => setActive(false)}
              >
                <TfiClose size={"1.5em"} className="text-white" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: -100 }}
              exit={{ x: -500 }}
              transition={{ delay: 0.1, lease: "anticipate" }}
              className="filters_modal bg-zinc-200"
            >
              <Filters
                productos={productos}
                filters={filters}
                setFilters={setFilters}
                setActiveFiltersModal={setActiveFiltersModal}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalFilters;
