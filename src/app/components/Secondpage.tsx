import Image from 'next/image';

export default function SecondPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF4F4]">
      <div className="max-w-5xl w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full sm:w-72 md:w-96 lg:w-1/2 h-auto">
              <Image
                src="/sidetable1.png"
                alt="Side Table"
                width={1200}
                height={1200}
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">Side Table</h3>
            <br/>
            <a
            href="#view"
            className="relative text-black text-lg font-medium inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
           View More
          </a>
          </div>

          {/* Second Card */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full sm:w-72 md:w-96 lg:w-1/2 h-auto">
              {/*  image */}
              <Image
                src="/sidetable2.png"
                alt="Side Table"
                layout="responsive"
                width={1200}
                height={1200}
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">Side Table</h3>
            <br/>
            <a
            href="#view"
            className="relative text-black text-lg font-medium inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
           View More
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
