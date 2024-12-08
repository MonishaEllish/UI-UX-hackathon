import Image from 'next/image';

export default function AsgaardSofa() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-10 bg-[#FFF9E5] p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 lg:h-[500px] ">
      
          <Image
            src="/Asgaard sofa 1.png"
            alt="Asgaard Sofa"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-start text-left space-y-4 m">
          <p className="text-gray-500 font-medium text-sm uppercase">New Arrivals</p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Asgaard Sofa</h1>
          <button className="px-6 py-2 bg-[#FFF9E5] text-black rounded border-2 border-black hover:bg-orange-200 transition-all">
  Order Now
</button>

        </div>
      </div>
    </div>
  );
}