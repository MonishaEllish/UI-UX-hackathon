import Image from "next/image";

function Instagram() {
  return (
    <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[450px] bg-[#FAF4F480]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/instagram.png" // Place the background image in the "public" folder
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90" // Set opacity to 30% for a clearer watermark effect
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-15"></div> {/* Overlay to enhance watermark effect */}
      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-gray-800">
          Our Instagram
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-600">
          Follow our store on Instagram
        </p>
        <button className="mt-4 px-6 w-[225px] h-[64px] py-3 text-sm sm:text-base font-medium bg-[#FAF4F480] text-black rounded-full hover:bg-gray-400 transition-all shadow-md">
  Follow Us
</button>

      </div>
    </div>
  );
}

export default Instagram;

