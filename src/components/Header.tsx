

import React from 'react'
 import Image from 'next/image'
 import { FaFacebookF } from "react-icons/fa";

 import { BsInstagram } from "react-icons/bs";
 import { FaTwitter } from "react-icons/fa";
 import { IoLogoLinkedin } from "react-icons/io5";
 import Link from 'next/link';

const Header = () => {
    return (

    <div className =' border-b border-[#000000]'>
    <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm">
    
        
        <div className='flex font-[roboto] gap-4'>
          <p>Phone Number: 956 742 455 678 </p>
          <p>|</p>
          <p> Email:info@ddsgnr.comimport</p>
          </div>
          <div className="flex gap-4">

        <FaFacebookF className=' w-[24px] h-[24px]   ' />
            <BsInstagram className=' w-[24px] h-[24px]'/>
            <FaTwitter className=' w-[24px] h-[24px]' />
            <IoLogoLinkedin className=' w-[24px] h-[24px]'/>
      
            </div>
             </div>
             

             
             <div className="border-t border-gray-400">
             <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <div><Image src={"/images/Ddsgnr Library.png"} width={130.6} height={41}alt="Header image"></Image></div>
            <ul className='flex gap-6 '>
            <li>
                    <Link href={"/"}>Home</Link>
                 </li>
            <li>
                    <Link href={"/"}>Courses</Link>
                 </li>
                <li>
                    <Link href={"/"}>Services</Link>
                 </li>
                 <li>
                    <Link href={"/"}>Achievement</Link>
                 </li>
                 <li>
                    <Link href={"/"}>About Us</Link>
                 </li>
                 <li>
                    <Link href={"/"}>Testimonial</Link>
                 </li>
                 
                 <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Login</button>
               
               <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
               Sign UP</button>
                 
            </ul>
            </div>
    </div>
    </div>
    
  )
}

export default Header

