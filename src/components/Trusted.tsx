import React from "react";
import Image from "next/image";

const Trusted = () => {
  
  const logos = [
    { src: "/images/Airbnb Logo.png", alt: "Airbnb Logo" },
    { src: "/images/logo.png", alt: "Company Logo 1" },
    { src: "/images/log.png", alt: "Company Logo 2" },
    { src: "/images/k.uu.png", alt: "Company Logo 3" },
    { src: "/images/hhh.png", alt: "Company Logo 4" },
    { src: "/images/uuhh.png", alt: "Company Logo 5" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10">
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <p className="text-lg  font-bold ">Trusted by 2000+ companies
          <span className="block lg">Worldwide.</span>
        </p>
         
      

      
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 mt-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={logo.src} width={124} height={40} alt={logo.alt} className="object-contain" />
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default Trusted;
