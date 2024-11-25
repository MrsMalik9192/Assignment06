import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    
    <div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center">
    Explore Courses By Category
    </h2>
        <p className="mt-2">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-8">
                <Image src={"/images/gh.png"} width={410} height={132}alt="Hero image"></Image>
                
                <Image src={"/images/Cgv.png"} width={410} height={132}alt="Hero image"></Image>

                <Image src={"/images/Cafhfh.png"} width={410} height={132}alt="Hero image"></Image></div>  
                
                
                <div className="flex flex-wrap justify-center md:justify-between gap-8">

                <Image src={"/images/Card.png"} width={410} height={132}alt="Hero image"></Image>

                <Image src={"/images/hghfgh.png"} width={410} height={132}alt="Hero image"></Image>

                <Image src={"/images/Card.pnguhj.png"} width={410} height={132}alt="Hero image"></Image> </div>
               
               
                <div className="flex flex-wrap justify-center md:justify-between gap-8">

                <Image src={"/images/jjj.png"} width={410} height={132}alt="Hero image"></Image>

                <Image src={"/images/jl;;k.png"} width={410} height={132}alt="Hero image"></Image>

                <Image src= {"/images/uoi.png"} width={410} height={132}alt="Hero image"></Image></div>
            </div>
            
        
        
                
            



    
  )
}

export default Explore
