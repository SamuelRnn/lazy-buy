import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";
import AnimatedLogo from "../components/AnimatedLogo";
import Link from "next/link";
import Card from "../components/Card"


const Store = () => {
  
 
  return (
    <>
        <Layout>
        <div className="min-h-screen bg-[#ffffff] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg  border-2">
        <div className="flex flex-col gap-1 w-full">
          
          
        </div>

       
      </div>
      {/* AnimatedLogo */}
      <div className=" lg:flex items-center justify-center">
        <Card/>
        <Card/>
      </div>

      
    </div>
        </Layout>
    </>
  );
};

export default Store