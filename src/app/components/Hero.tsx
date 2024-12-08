import React from 'react';
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#FBEBB5] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 md:pr-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
            Rocket single 
            <br />
            <br />
            seater
          </h1>
          <a
            href="#shop"
            className="relative text-black text-lg font-medium inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
            Shop Now
          </a>
        </div>

        {/* Image Section  */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="w-full md:w-[800px] lg:w-[1000px] h-auto md:h-auto flex items-center justify-center">
            <Image
              src="/sofa.png"
              alt="sofa image"
              width={1000}
              height={1200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

