import Image from 'next/image';

export default function TopPicks() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center py-10 px-4">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">Top Picks For You</h1>
      <p className="text-gray-600 text-center mb-8">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-48">
            {/* Replace with your image */}
            <Image src="/toppick1.png" alt="Trenton modular sofa" layout="fill" objectFit="contain" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Trenton modular sofa_3</h3>
          <p className="text-gray-700 font-extrabold mt-2">Rs. 25,000.00</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-48 ">
            {/* Replace with your image */}
            <Image src="/toppick2.png" alt="Granite dining table" layout="fill" objectFit="contain" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Granite dining table with<br/> dining chair</h3>
          <p className="text-gray-700 font-extrabold mt-2">Rs. 25,000.00</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-48 ">
            {/* Replace with your image */}
            <Image src="/toppick3.png" alt="Outdoor bar table" layout="fill" objectFit="contain" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Outdoor bar table and <br/> stool</h3>
          <p className="text-gray-700 font-extrabold mt-2">Rs. 25,000.00</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-48">
            {/* Replace with your image */}
            <Image src="/toppick4.png" alt="Plain console with teak <br/> mirror" layout="fill" objectFit="contain" />
          </div>
          <h3 className="mt-4 text-lg font-medium">Plain console with teak mirror</h3>
          <p className="text-gray-700 font-extrabold mt-2">Rs. 25,000.00</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* View More Button */}
      <a
            href="#view"
            className="relative text-black text-lg font-medium inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
           View More
          </a>
    </div>
  );
}