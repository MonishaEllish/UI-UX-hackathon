"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      {/* Section 1: Header with Background */}
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
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-800">Contact</h1>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">Home {'>'} Contact</p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form and Info */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Get In Touch With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For more information about our products & services, please feel free to drop us an email. Our staff will
            always be there to help you out. Let's get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 ml-4">
              <FaMapMarkerAlt  />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 ml-4">
              <FaPhone  />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 ml-4">
              <FaClock  />
              <div>
                <h3 className="font-semibold mb-1">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Your Name</h4>
              <input
                type="text"
                placeholder="Abc"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Email Address</h4>
              <input
                type="email"
                placeholder="abc@def.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Subject</h4>
              <input
                type="text"
                placeholder="This is optional"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Message</h4>
              <textarea
                placeholder="Hi! I'd like to ask about..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 border border-gray-500 text-gray-700 bg-transparent rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>


      {/* section 3 */}

      <section>
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
      </section>
    </div>
  );
}
