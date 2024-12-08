'use client';

import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import Image from 'next/image'

import Footer from '../components/Footer';



export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  

  return (
    <>
      
      <section className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="bg-[#FFF9E5] rounded-lg h-[500px] flex items-center justify-center">
          <Image
        src="/item15.png"
        alt="Asgaard Sofa"
        className="max-w-full max-h-full rounded-lg object-cover"
      />
          </div>

          {/* Product Details - Right Side */}
          <div className="space-y-6">
            {/* Product Title and Price */}
            <div className="space-y-4">
              <h1 className="text-3xl font-medium">Asgaard Sofa</h1>
              <p className="text-xl">Rs. 250,000.00</p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">5 Customer Review</span>
              </div>

              <p className="text-gray-600">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                compact, stout-hearted hero with a well-balanced audio which boasts a clear
                midrange and extended highs for a sound.
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <p className="font-medium">Size</p>
              <div className="flex gap-4">
                {['L', 'XL', '2S'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <p className="font-medium">Color</p>
              <div className="flex gap-4">
                {[
                  { name: 'purple', class: 'bg-purple-600' },
                  { name: 'black', class: 'bg-black' },
                  { name: 'gold', class: 'bg-yellow-600' },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.name
                        ? 'ring-2 ring-offset-2 ring-black'
                        : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-4 py-2 border-r border-gray-300 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-4 py-2 border-l border-gray-300 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button className="px-8 py-2 bg-black text-white rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex gap-8 text-sm text-gray-600">
                <span>SKU</span>
                <span>: SS001</span>
              </div>
              <div className="flex gap-8 text-sm text-gray-600">
                <span>Category</span>
                <span>: Sofas</span>
              </div>
              <div className="flex gap-8 text-sm text-gray-600">
                <span>Tags</span>
                <span>: Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <span>Share</span>
                <div className="flex gap-4">
                  <button className="hover:text-black">
                    <FaFacebookF size={20} />
                  </button>
                  <button className="hover:text-black">
                    <FaLinkedinIn size={20} />
                  </button>
                  <button className="hover:text-black">
                    <FaTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <button className="absolute top-4 right-4 md:static flex items-center gap-2 text-sm text-gray-600 hover:text-black">
              <FiHeart size={20} />
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
