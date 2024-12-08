import React from "react";
import { FaClock } from "react-icons/fa"; // For time
import { FaCalendarAlt } from "react-icons/fa"; // For date
import Image from "next/image";

function OurBlogs() {
  const blogs = [
    {
      id: 1,
      image: "/blog1.png", // Replace with actual image path
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 2,
      image: "/blog2.png", // Replace with actual image path
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
    },
    {
      id: 3,
      image: "/blog3.png", // Replace with actual image path
      title: "Going all-in with millennial design",
      readTime: "5 min",
      date: "12th Oct 2022",
    },
  ];

  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center mb-4">Our Blogs</h2>
        <p className="text-center text-gray-600 mb-8">
          Find a bright idea to suit your taste with our great selection
        </p>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4"
            >
              {/* Image Section */}
              <div className="w-[393px] h-[393px] mx-auto mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>

                {/* Time and Date Section */}
                <div className="flex items-center text-sm  mb-4">
                  <FaClock /> <span className="mr-4">{blog.readTime}</span>
                  <FaCalendarAlt  /> <span>{blog.date}</span>
                </div>

                {/* Read More */}
                <a
            href="#more"
            className="relative text-black text-lg font-bold inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
            Read More
          </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts */}
        <div className="text-center mt-8">
        <a
            href="#more"
            className="relative text-black text-lg font-bold inline-block after:content-[''] after:block after:w-full after:h-[2px] after:bg-black after:mt-1 after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
          >
           View All Post
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurBlogs;
