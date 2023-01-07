import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiLogIn } from "react-icons/bi";
import { GiUpgrade } from "react-icons/gi";
import { signOut } from "next-auth/react";

const SideBar = forwardRef(({ setActive }, ref) => {
  const router = useRouter();

  function handleSignOut() {
    signOut();
  }

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="lazycartremove.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <div
          onClick={() =>
            setActive({
              account: false,
              products: false,
              performance: false,
              home: true,
              plan: false,
            })
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            setActive({
              home: false,
              account: true,
              products: false,
              performance: false,
              plan: false,
            })
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            setActive({
              home: false,
              account: false,
              products: true,
              performance: false,
              plan: false,
            })
          }
        >
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <TfiLayoutListThumb className="h-5 w-5" />
            </div>
            <div>
              <p>Products</p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              setActive({
                home: false,
                account: false,
                products: false,
                performance: true,
                plan: false,
              })
            }
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <DiGoogleAnalytics className="h-5 w-5" />
            </div>
            <div>
              <p>Performance</p>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              setActive({
                home: false,
                account: false,
                products: false,
                performance: false,
                plan: true,
              })
            }
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <GiUpgrade className="h-5 w-5" />
            </div>
            <div>
              <p>Plan</p>
            </div>
          </div>
        </div>

        <div onClick={handleSignOut}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
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
