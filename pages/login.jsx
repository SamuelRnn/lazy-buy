import LandingPage from "../components/LandingPage/Form";
import Link from "next/link";
import logo from "../public/Lazy_Logo.png";
import Image from "next/image";

export default function LANDING() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-400">
        <LandingPage />
      </div>
      <div id="logo_home" className="lg:flex items-center justify-center h-full w-1/2 bg-transparent">
          
      </div>
    </div>
  );
}
