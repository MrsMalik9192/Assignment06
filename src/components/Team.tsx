import React from 'react'
import Image from 'next/image'
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our team
        </h2>
        <p className="text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly mt-10">
        {/* Team Member 1 */}
        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/fisrt.png" width={80} height={80} alt="James Nduku" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">James Nduku</h1>
          <p className="text-gray-600">Marketing Coordinator</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/fivell.png" width={80} height={80} alt="Joseph Munyambu" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">Joseph Munyambu</h1>
          <p className="text-gray-600">Nursing Assistant</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/fourll.png" width={80} height={80} alt="Joseph Ngumbau" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">Joseph Ngumbau</h1>
          <p className="text-gray-600">Medical Assistant</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/threelll.png" width={80} height={80} alt="Erick Kipkemboi" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">Erick Kipkemboi</h1>
          <p className="text-gray-600">Web Designer</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>

        {/* Placeholder for remaining members */}
        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/sslll.png" width={80} height={80} alt="Team Member" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">Name</h1>
          <p className="text-gray-600">Position</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>

        <div className="text-center mb-8 w-1/3 px-4">
          <Image src="/images/llllll.png" width={80} height={80} alt="Team Member" className="mx-auto rounded-full" />
          <h1 className="mt-4 text-xl font-semibold">Name</h1>
          <p className="text-gray-600">Position</p>
          <div className="flex justify-center mt-2 space-x-4">
            <BsInstagram size={24} />
            <FaTwitter size={24} />
            <FaDribbble size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
