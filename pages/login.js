import LandingPage from "../components/LandingPage/Form";
import Link from "next/link"
import logo from "../img/Lazy_Logo.png"



export default function LANDING() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-400">
        <LandingPage />
      </div>
      <div className=" hidden lg:flex items-center justify-center h-full w-1/2 bg-gray-300">
        <div>
          <div>
            <img src={logo}/>
          </div>
          <div className="w-80 h-60 ">
            <Link href='/home'>
            <h1 className="pt-20 text-center text-5xl font-semibold text-textH1-50 ">
              {" "}
              Lazy Buy
            </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
