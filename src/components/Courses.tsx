import React from 'react' 
import Link from 'next/link'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Courses</h2>
      
        <p className='text-center'>Your Ultimate Guide to learning</p>
      </div>
      <div><ul className=' flex justify-center items-center gap-4 py-1 px-2 '>
      <li>
                    <Link className='underline' href={"/"} >Popular</Link>
                 </li>
                 <li>
                    <Link href={"/"}>Recommended</Link>
                 </li>
                 <li>
                    <Link href={"/"}>Best Price</Link>
                 </li>
                
            </ul>
            </div>


            <div className='flex justify-evenly'>
            <div><Image src="/images/co.jpg" width={416} height={30} alt="Courses  images"/>
            <div><h1>Design</h1>
            <p className='font-bold'>UX/UI Design 201</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p>elit. Suspendisse varius enim in eros.</p>
            <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button></div>
            
            </div>

           <div><Image src="/images/cou.png" width={416} height={300} alt="Courses image" /> 
           <h1>Programmimg</h1>
           <p className='font-bold'>Introduction to Python</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
           <p>elit. Suspendisse varius enim in eros.</p>
           <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button></div>
            
<div><Image src="/images/cours.png" width={416} height={300} alt="Courses image" />
<h1>Business</h1>
<p className='font-bold'>Data Analysis for Beginners</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
<p>elit. Suspendisse varius enim in eros.</p>
<button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button></div>
</div>

           <div className='flex justify-evenly'>
           <div><Image src="/images/chh.png" width={416} height={300} alt="Courses image" />
           <h1>Art</h1>
           <p className='font-bold'>Art Specialization</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
           <p>elit. Suspendisse varius enim in eros.</p>
           <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button>
           </div>
            <div><Image src="/images/Iuhg.png" width={416} height={300} alt="Courses image" />
            <h1>Law</h1>
            <p className='font-bold'>Rule of Law</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>elit. Suspendisse varius enim in eros.</p>


            <p></p> <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button>
           </div>
            <div><Image src="/images/ghjgh.png" width={416} height={300} alt="Courses image" />
            <h1>Tech</h1>
            <p className='font-bold'>Introduction to webflow</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>elit. Suspendisse varius enim in eros.</p>
            <button className="px-6 py-2 border border-black text-black rounded-md hover:bg-gray-100">
               Enroll Now</button>


            <p></p></div>
           </div>

                    
                    </div>
      
    
  )
}

export default Courses
