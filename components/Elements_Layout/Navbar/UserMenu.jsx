import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { clearSession } from "../../../redux/accountSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const UserMenu = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.account.session);

  const handleSignOut = async () => {
    dispatch(clearSession());
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
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.1 }}
      className="user_menu_pos top-[70px] w-[200px] rounded-md bg-fondo-200 text-zinc-100 flex flex-col gap-y-1 overflow-hidden"
    >
      {session.type === "user" && (
        <Link
          href="/profile"
          className="hover:bg-fondo-300 rounded w-full px-2 py-2 text-left transition-colors"
        >
          Profile
        </Link>
      )}

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
