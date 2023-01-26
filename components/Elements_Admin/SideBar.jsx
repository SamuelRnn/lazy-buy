import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { FaBuilding } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { clearSession } from "../../redux/accountSlice";
import { HomeIcon } from "@heroicons/react/24/solid";

const SideBar = forwardRef(({ setActive }, ref) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOut = async () => {
    dispatch(clearSession());
    await signOut({
      callbackUrl: "/login?session=signed-out",
    });
  };

  return (
    <div ref={ref} className="fixed w-56 h-full bg-[rgba(255,255,255,0.7)] backdrop-blur shadow-sm z-50">
      <div className="flex justify-center mt-6 mb-14">
        <Link href="/">
          <Image
            width={80}
            height={80}
            className="w-32 h-auto"
            src="https://res.cloudinary.com/dl5hwebwa/image/upload/v1673132716/lazy-buy/lazycartremove_lvvnie.png"
            alt="company logo"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/admin"
                ? "bg-fondo-100 text-fondo-500"
                : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Go back to store</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/companies">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname === "/admin/companies"
                ? "bg-fondo-100 text-fondo-500"
                : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
            }`}
          >
            <div className="mr-2">
              <FaBuilding className="h-5 w-5" />
            </div>
            <div>
              <p>Companies</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/users">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin/users"
                ? "bg-fondo-100 text-fondo-500"
                : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
            }`}
          >
            <div className="mr-2">
              <MdGroups className="h-5 w-5" />
            </div>
            <div>
              <p>Users</p>
            </div>
          </div>
        </Link>
        <Link href="/admin/products">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin/products"
                ? "bg-fondo-100 text-fondo-500"
                : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
            }`}
          >
            <div className="mr-2">
              <TfiLayoutListThumb className="h-5 w-5" />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </Link>
        <Link
          href="/admin/transactions"
          className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/admin/transactions"
              ? "bg-fondo-100 text-fondo-500"
              : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
          }`}
        >
          <div className="mr-2">
            <FaExchangeAlt className="h-5 w-5" />
          </div>
          <div>
            <p>Transactions</p>
          </div>
        </Link>

        <div onClick={handleSignOut}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-fondo-100 text-fondo-500"
                : "text-gray-400 hover:bg-fondo-100 hover:text-fondo-500"
            }`}
          >
            <div className="mr-2">
              <BiLogIn className="h-5 w-5" />
            </div>
            <div>
              <p>LogOut</p>
            </div>
          </div>
        </div>
        {/* signOut */}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
/* 
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
} */
