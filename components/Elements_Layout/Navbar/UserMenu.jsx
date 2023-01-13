import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";
import { clearSession } from "../../../redux/accountSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";

const UserMenu = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    setTimeout(() => dispatch(clearSession()), 300);
    await signOut({
      callbackUrl: "/login?session=signed-out",
    });
  };
  const body = document.querySelector("main");
  useEffect(() => {
    body.onclick = () => setActive(false);
    return () => {
      body.onclick = null;
    };
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.1 }}
      className="user_menu_pos top-[70px] w-[200px] rounded-md bg-fondo-200 text-zinc-100 p-1 flex flex-col gap-y-1"
    >
      <button className="hover:bg-fondo-300 rounded w-full px-2 py-2 text-left transition-colors">
        option 1
      </button>
      <button className="hover:bg-fondo-300 rounded w-full px-2 py-2 text-left transition-colors">
        option 2
      </button>
      <button
        onClick={handleSignOut}
        className="hover:bg-fondo-300 rounded w-full px-2 py-2 text-left transition-colors"
      >
        Sign out
      </button>
    </motion.div>
  );
};

export default UserMenu;
