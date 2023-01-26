import { useState } from "react";
import Link from "next/link";
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiMore2Fill,
  RiCloseFill,
  RiServiceLine,
  RiReplyLine,
} from "react-icons/ri";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { useSession, getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { clearSession } from "../../redux/accountSlice";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { GiMilkCarton } from "react-icons/gi";

const Sidebar = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  // const { data: session } = useSession()
  const router = useRouter();

  const handleSignOut = async () => {
    dispatch(clearSession());
    await signOut({
      callbackUrl: "/login?session=signed-out",
    });
  };
  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 bg-zinc-600  ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden fixed right-2 top-2 text-2xl bg-primary-900 p-2.5 rounded-full text-black z-50"
        >
          {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
        </button>
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh] ">
          <Image
            src={user.profilePicture.url}
            alt="Not found"
            width={200}
            height={200}
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-xl text-white font-bold">
            {user && user.userName}
          </h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
            {user && user.email}
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-8 bg-fondo-300">
          <nav className="flex flex-col gap-8">
            <Link
              href="/profile"
              className={`flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors ${
                router.pathname === "/profile"
                  ? "bg-zinc-800"
                  : "text-white hover:bg-zinc-800 hover:text-fondo-300"
              }`}
            >
              <RiHome3Line /> Home
            </Link>
            <Link
              href="/profile/record"
              className={`flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors ${
                router.pathname === "/profile/record"
                  ? "bg-zinc-800"
                  : "text-white hover:bg-zinc-800 hover:text-fondo-300"
              }`}
            >
              <RiFileCopyLine /> Record
            </Link>
            <Link
              href="/profile/like"
              className={`flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors ${
                router.pathname === "/profile/like"
                  ? "bg-zinc-800"
                  : "text-white hover:bg-zinc-800 hover:text-fondo-300"
              }`}
            >
              <RiServiceLine /> Like
            </Link>
            <Link
              href="/"
              className={`flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-white hover:bg-zinc-800 hover:text-fondo-300`}
            >
              <GiMilkCarton /> Go to store
            </Link>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <div className="mt-2">
              <Link
                href="mailto:lazybuy23@gmail.com"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
              >
                <UserIcon className="h-5 w-5" /> Contact us
              </Link>
            </div>
            <div className="mt-2" onClick={handleSignOut}>
              <p className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors cursor-pointer">
                <BiLogIn />
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Button mobile */}
    </>
  );
};

export default Sidebar;

export async function getServerSideProps(context) {
  const { req } = context;

  const session = await getSession({
    req,
  });
  // if user isn't is auth
  if (!session)
    return { redirect: { destination: "/login", permanent: false } };

  // if user is is auth
  return {
    props: { session },
  };
}
