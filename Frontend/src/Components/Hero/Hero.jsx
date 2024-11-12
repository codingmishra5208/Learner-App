import React from 'react';
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { CiLock } from "react-icons/ci";


const Hero = () => {
  return (
    <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-5 bg-[#FAFAFA]  dark:bg-slate-900 dark:text-white'>
      <h1 className='text-[#573BFF] text-center text-xl md:text-2xl font-Font font-semibold mt-4 dark:text-white'>What We Offer</h1>       
        <p data-aos="zoom-in" className='text-center text-3xl md:text-4xl font-bold mt-2'>For Your Future Learning.</p>
       
          <div className='flex mt-10 justify-around items-center md:flex-row flex-col gap-3 cursor-pointer'>

            <div className='md:w-1/4 shadow-lg border rounded-md'>
               <p className='p-3'>
               <TiLocationArrowOutline className='border px-2 rounded-full text-[50px] text-white bg-orange-500 hover:bg-white hover:text-orange-500'/>
               </p>
               <h1 className='px-3 py-1 text-xl font-Font font-semibold cursor-pointer'>Online Courses</h1>                
                <p className='px-3 py-1 mb-2 text-gray-500 dark:text-white'>Interactive provide access world
                   class materials for unique catalysts for change my ocardinat.
                </p>
              </div>

             <div  className='shadow-lg md:w-1/4 border rounded-md'>
             <p className='p-3'>
             <GrRestroomWomen  className='border px-2 rounded-full text-[50px] text-white bg-orange-500 hover:bg-white hover:text-orange-500' />
               </p>
               <h1 className='px-3 py-1 text-xl font-Font font-semibold cursor-pointer'>Expert Trainer</h1>
                <p className='px-3 py-1 mb-2 text-gray-500 dark:text-white'>
                An expert trainer is a professional who possesses extensive knowledge
                 and skills in a  field and others.
                </p>
             </div>

              <div className='shadow-lg md:w-1/4 border rounded-md '>
              <p className='p-3'>
               <IoDocumentTextOutline  className='border px-2 rounded-full text-[50px] text-white bg-orange-500 hover:bg-white hover:text-orange-500' />
               </p>
               <h1 className='px-3 py-1 text-xl font-Font font-semibold cursor-pointer'>Get Certificate</h1>
                <p className='px-3 py-1 mb-2 text-gray-500 dark:text-white'>
                A certificate is an official document that recognizes an individual's
                 achievement or in a particular area.
                </p>
              </div>

              <div  className='shadow-lg md:w-1/4 border rounded-md'>
              <p className='p-3'>
              <CiLock className='border px-2 rounded-full text-[50px]  text-white bg-orange-500 hover:bg-white hover:text-orange-500' />
               </p>
               <h1 className='px-3 py-1 text-xl font-Font font-semibold cursor-pointer'>Life Time Access</h1>
                <p className='px-3 py-1 mb-2 text-gray-500 dark:text-white'>
                Lifetime access refers to the ability to use a product, service,
                 or often without any additional costs.
                </p>
              </div>
          </div> 
      </div>
  )
}

export default Hero;
