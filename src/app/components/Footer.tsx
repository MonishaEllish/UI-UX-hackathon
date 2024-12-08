import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> {/* Reduced gap between columns */}
        {/* Address */}
        <div className="flex flex-col justify-start space-y-2">
          <p className="text-sm mt-2"> {/* Reduced margin-top */}
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3> {/* Reduced margin-bottom */}
          <ul className="space-y-1"> {/* Reduced space between links */}
            <li>
              <a href="/" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/shop" className="hover:text-blue-500">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3> {/* Reduced margin-bottom */}
          <ul className="space-y-1"> {/* Reduced space between links */}
            <li>
              <a href="/payment-options" className="hover:text-blue-500">Payment Options</a>
            </li>
            <li>
              <a href="/returns" className="hover:text-blue-500">Returns</a>
            </li>
            <li>
              <a href="/privacy-policies" className="hover:text-blue-500">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3> {/* Reduced margin-bottom */}
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="text-black underline hover:text-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-6 text-center text-sm text-gray-500">
        © 2022 Meubel House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
