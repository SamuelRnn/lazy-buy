import React from "react";
import Image from "next/image";
import logo from "../../public/lazygif.gif";

const HomeHeader = () => {
  return (
    <nav className="relative p-6 bg-fondo-300 container mx-auto">
        <div className="flex items-center justify-between">
            <div className="pt-2 flex items-center space-x-6">
                <Image
                className="rounded-full w-24 h-24 object-cover"
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDdlJ9bo7f5d6w82MI6NQiaiiVFiDj7AwAQ&usqp=CAU' width={1000} height={1000} alt='profile'></Image>
                 <h2 className="text-white font-semibold text-2xl">Armando Mendoza Style SA</h2>
            </div>
            <div className="hidden xl:flex space-x-6 text-white text-2xl">
                <a className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all" href="#">Support</a>
                <a className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all" href="#">FAQ</a>
                <a className="hover:bg-fondo-50 hover:text-fondo-300 p-2 rounded-lg transition-all" href="#">Your Plan</a>
            </div>
            <a href="" className="p-3 px-6 pt 2 text-white bg-fondo-100 rounded-full baseline">Upgrade</a>
        </div>
    </nav>
  );
};

export default HomeHeader;
