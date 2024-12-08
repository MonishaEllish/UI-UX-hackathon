"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi';
import Footer from '../components/Footer';


const SearchBar = () => {
  const [showResults, setShowResults] = useState(8);

  const handleShowResults = () => {
    setShowResults(showResults === 8 ? 12 : 8);
  };

  return (
    <div className="bg-[#FAF4F4] shadow-md rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FiFilter size={20} />
        </button>
        <p>Filter</p>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FiGrid size={20} />
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FiList size={20} />
        </button>
      </div>
      <p className="text-gray-600 text-sm">Showing {showResults} of 52 results</p>
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleShowResults}
        >
          <FiChevronDown size={20} />
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Short by</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Default</button>
      </div>
    </div>
  );
};

const FurnitureGallery = () => {
  const furnitureData = [
    { image: '/item1.png', title: 'Trenton modular', price: 'Rs. 25,000.00' },
    { image: '/item2.png', title: 'Granite dining table with chairs', price: 'Rs. 25,000.00' },
    { image: '/item3.png', title: 'Outdoor tour table and chairs', price: 'Rs. 25,000.00' },
    { image: '/item4.png', title: 'Plain console with rack mirror', price: 'Rs. 25,000.00' },
    { image: '/item5.png', title: 'Design coffee table', price: 'Rs. 15,000.00' },
    { image: '/item6.png', title: 'Light coffee table', price: 'Rs. 225,000.00' },
    { image: '/item7.png', title: 'Round coffee table', price: 'Rs. 250,000.00' },
    { image: '/item8.png', title: 'Reclaimed look coffee table', price: 'Rs. 25,200.00' },
    { image: '/item10.png', title: 'Plan', price: 'Rs. 258,200.00' },
    { image: '/item11.png', title: 'Rectangular bench', price: 'Rs. 20,000.00' },
    { image: '/item12.png', title: 'Sofa chairs', price: 'Rs. 200,000.00' },
    { image: '/item13.png', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
    { image: '/item14.png', title: 'Grande square side', price: 'Rs. 258,800.00' },
    { image: '/item15.png', title: <a href="/AsgaardSofa" className="text-black hover:underline">Asgaard Sofa</a>, price: 'Rs. 250,000.00' },
    { image: '/item16.png', title: 'Kelya sofa three seater', price: 'Rs. 115,000.00' },
    { image: '/Outdoor sofa set 1.png', title: 'Outdoor sofa set', price: 'Rs. 244,000.00' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {furnitureData.map((furniture, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-64 relative">
            <Image
              src={furniture.image}
              alt="title"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium">{furniture.title}</h3>
            <p className="text-gray-600 font-bold">{furniture.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Shop() {
  return (
    <>
      <section>
        <Header />
        <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[316px] bg-[#FAF4F480]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/shop1.png" // Place the background image in the "public" folder
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-90"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-15"></div>
          {/* Content */}
          <div className="relative text-center">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-800">Shop</h1>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">home {'>'} Shop</p>
          </div>
        </div>
      </section>

      <section>
        <SearchBar />
      </section>

      <section>
        <FurnitureGallery />
      </section>

      {/* Pagination */}
      <section>
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center justify-center space-x-2">
            <button className="bg-[#FBEBB5] hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md">
              1
            </button>
            <button className="bg-[#FBEBB5] hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md">
              2
            </button>
            <button className="bg-[#FBEBB5] hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md">
              3
            </button>
            <button className="bg-[#FBEBB5] hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Section  */}
      <section>
  <div className="bg-[#FAF4F4] py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-[#FAF4F4] rounded-lg px-6 py-8 text-center">
          <h3 className="text-lg font-extrabold mb-2">Free Delivery</h3>
          <p className="text-gray-600">
            for all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#FAF4F4] rounded-lg px-6 py-8 text-center">
          <h3 className="text-lg font-extrabold mb-2">90 Days Return</h3>
          <p className="text-gray-600">
            if goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-[#FAF4F4] rounded-lg px-6 py-8 text-center">
          <h3 className="text-lg font-extrabold mb-2">Secure Payment</h3>
          <p className="text-gray-600">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </>
  );
}

