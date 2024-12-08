import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
        {/* section 1 */}
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
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-800">My Account</h1>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">home {'>'} My account</p>
          </div>
        </div>
      </section>


      {/* section 2 */}
      <section>
  <div className="flex justify-center items-center h-screen bg-white py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Login Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pl-4">Log In</h2>
          <form className="space-y-6" action="#" method="POST">
            <div className="space-y-4">
              {/* Username or Email */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Username or Email Address</h3>
                <input
                  id="username-or-email"
                  name="username-or-email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
                />
              </div>

              {/* Password */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Password</h3>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              {/* Lost your password link */}
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Lost your Password?
                </a>
              </div>
            </div>

            {/* Log In Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md text-gray-900 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pl-4">Register</h2>
          <form className="space-y-6" action="#" method="POST">
            <div className="space-y-4">
              {/* Email Address */}
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email Address</h3>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 
                />
              </div>

              {/* Additional paragraph space */}
              <div>
                <p className="text-gray-600">
                A link to set a new password will be sent to your email<br/> address.<br/><br/><br/>
                Your personal data will be used to support your <br/>experience throughout this website, to manage access <br/>to your account, and for other purposes described in our privacy<br/> policy.
                </p>
              </div>
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-md text-gray-900 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
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

   
    </div>
  )
}
