import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">
            Learn New Skills <br /> Online with Ease
          </h1>
          <p className="text-lg text-gray-700">
            Discover a wide range of courses covering a variety of
          </p>
          <p>subjects, taught by expert instructors.</p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Start Learning Now
            </button>
            <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
              Explore Courses
            </button>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/Image.jpg"
            width={340}
            height={400}
            alt="Hero image"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
