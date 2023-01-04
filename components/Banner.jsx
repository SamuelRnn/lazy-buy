import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="py-14 px-3">
          <div className="lg:max-w-[1440px] relative inset-0 md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-20 md:px-6 px-4 lg:py-20 md:py-12 py-9">
            <div className="relative">
              <img
                src="https://www.novagric.com/images/empresa/trabaja-con-nosotros.jpg"
                className="w-full object-cover lg:h-[330px] lg:block md:hidden hidden"
              />
              <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
              
              <div className="absolute lg:bottom-10 md:bottom-5 bottom-0 lg:px-7 md:px-10 px-4 py-4">
                <p className="lg:text-7xl md:text-2xl text-2xl font-semibold leading-2 text-fondo-200 ">
                  ¿Por qué deberias vender tus productos con nosotros?
                </p>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
      
        `}
      </style>
    </>
  );
}

export default Banner;