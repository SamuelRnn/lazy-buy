import { Bars3Icon } from "@heroicons/react/24/solid";
import { BiLogIn } from "react-icons/bi";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";

export default function TopBar({ showNav, setShowNav }) {
  const { data: session } = useSession();

  const user = useSelector(state => state.account.session)

  function handleSignOut() {
    signOut({
      callbackUrl: "/login?session=signed-out",
    });
  }

  return (
    <div
      className={`fixed z-40 w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-transparent ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16 backdrop-blur bg-white">
        <Bars3Icon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16 backdrop-blur bg-transparent rounded">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src={user.image}
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                {session && session.user.name}
              </span>
            </Menu.Button>
          </div>
        </Menu>
      </div>
    </div>
  );
}
