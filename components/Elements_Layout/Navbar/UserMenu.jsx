import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { clearSession } from "../../../redux/accountSlice";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiUser, FiHeart } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";


const backdrop = {
  visible: {
    opacity: 1,
    transition:{ duration: 0.15}
  },
  hidden: {
    opacity: 0,
    transition:{ duration: 0.15}
  },
};

const UserMenu = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.account.session);

  const handleSignOut = async () => {
    dispatch(clearSession());
    await signOut({
      callbackUrl: "/login?session=signed-out",
    });
  };
  const body = document.querySelector("main");
  // useEffect(() => {
  //   body.onclick = () => setActive(false);
  //   return () => {
  //     body.onclick = null;
  //   };
  // });

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backdrop}
          className="fixed w-full h-full bg-[#01010152]  top-0 left-0 z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
        
          <motion.div className="relative w-[90%] md:w-[50%] mt-24 h-60 mx-auto bg-fondo-300 flex flex-col items-center justify-evenly rounded-2xl">
            <button
              onClick={() => setShowModal((state) => !state)}
              className="absolute top-4 right-4 p-1 bg-white rounded-full w-8"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-white">
              Already leaving?
            </h2>
            {session.type === "user" && (
            <>
              <Link
                href="/profile"
                className="hover:bg-fondo-300 w-full px-2 py-2 text-left transition-colors duration-75 flex items-center"
              >
                <FiUser className="mr-2" />
                Profile
              </Link>
              <Link
                href="/profile/like"
                className="hover:bg-fondo-300 w-full px-2 py-2 text-left transition-colors duration-75 flex items-center"
              >
                <FiHeart className="mr-2" />
                Wishlist
              </Link>
            </>
          )}
            <button
              onClick={handleSignOut}
              className="flex items-center bg-fondo-50 p-4 rounded-lg"
            >
              <RiLogoutBoxRLine className="mr-2" />
              Sign out
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserMenu;
