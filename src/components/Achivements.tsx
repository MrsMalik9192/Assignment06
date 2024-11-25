import React from 'react'
import Image from 'next/image'

const Achivements = () => {
  return (
    <div className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center">
    Our Achivements
    </h2>
   
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra</p>
            <p>ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><div/>

    <div className='flex w-[1256] h-[96] gap-24px justify-center'>
        <Image src={"/images/200.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/50.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/370.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/100.png"} width={200} height={400}alt="Hero image"></Image>


    </div>
    </div>



    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center">
    Our Achivements
    </h2>
    
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra</p>
            <p>ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><div/>

    <div className='flex w-[1256] h-[96] gap-24px justify-center'>
        <Image src={"/images/200.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/50.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/370.png"} width={200} height={400}alt="Hero image"></Image>
        <Image src={"/images/100.png"} width={200} height={400}alt="Hero image"></Image>


</div>
</div>
</div>
    

    
  )
}

export default Achivements
