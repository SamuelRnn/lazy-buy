import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { clearSession } from "../../../redux/accountSlice";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiUser, FiHeart } from "react-icons/fi";
import { RiLogoutBoxRLine, RiAdminLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const backdrop = {
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const UserMenu = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.account.session);

  const handleSignOut = async () => {
    setShowModal(false)
    dispatch(clearSession());
    await signOut({
      callbackUrl: "/login?session=signed-out",
    });
  };
 
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
          <motion.div className="relative w-[90%] md:w-[50%] mt-24 h-60 mx-auto bg-fondo-300 shadow-lg flex flex-col items-center justify-evenly rounded-2xl">
            <button
              onClick={() => setShowModal((state) => !state)}
              className="absolute top-4 right-4 p-1 bg-white transition-all hover:text-fond rounded-full w-8 hover:bg-fondo-500"
            >
              <MdClose className="text-2xl" />
            </button>
            <h2 className="text-3xl font-semibold text-white overflow-hidden text-ellipsis whitespace-nowrap">
              Hello Champ!
            </h2>
            {session.type === "user" && (
              <div className="flex w-[80%] text-black justify-evenly">
                <Link
                  href="/profile"
                  className="flex items-center p-4 cursor-pointer bg-slate-500 text-white rounded-lg hover:bg-zinc-50 transition-all hover:text-fondo-300 shadow-lg"
                >
                  <FiUser className="mr-2" />
                  Profile
                </Link>
                {session.isAdmin && (
                  <Link
                    href="/admin/companies"
                    className="flex items-center p-4 cursor-pointer bg-slate-500 text-white rounded-lg hover:bg-zinc-50 transition-all hover:text-fondo-300 shadow-lg"
                  >
                    <RiAdminLine className="mr-2" />
                    Admin
                  </Link>
                )}
                <Link
                  href="/profile/like"
                  className="flex items-center p-4 cursor-pointer bg-slate-500 text-white rounded-lg hover:bg-zinc-50 transition-all hover:text-fondo-300 shadow-lg"
                >
                  <FiHeart className="mr-2" />
                  Wishlist
                </Link>
              </div>
            )}
            <button
              onClick={handleSignOut}
              className="flex items-center p-4 cursor-pointer bg-slate-500 text-white rounded-lg hover:bg-zinc-50 transition-all hover:text-fondo-300"
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
