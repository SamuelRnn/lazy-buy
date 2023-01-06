import { useEffect, useState } from "react";
import SideBar from "../../components/DashBoard/SideBar";
import TopBar from "../../components/DashBoard/TopBar";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Dashboard = ({children}) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) addEventListener("resize", handleResize);

    // when the component is unmounted
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </div>
  );
};

export default Dashboard;
