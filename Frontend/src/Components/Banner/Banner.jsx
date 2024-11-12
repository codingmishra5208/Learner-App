import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Enrollment from '../Enrollment/Enrollment';

const pic="https://www.onlinepathshalahub.com/website-front/img/all-img/hero-img2.png";
const pic2="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=640";

const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-24 flex flex-col md:flex-row bg-[#FFEFE0] dark:bg-slate-900 dark:text-white'>
       <div className='w-full md:w-1/2 py-12 md:py-24 order-2 md:order-1'>
       <p className='font-font text-sm md:text-[20px] font-bold bg-gradient-to-r from-cyan-800 to-pink-600 bg-clip-text text-transparent dark:text-white'>
        FIGURATIVE POTENTIALS WITH ONLINE LEARNING
       </p>
              
        <p data-aos="fade-right" className='text-4xl md:text-5xl font-Font font-bold text-gray-800 mt-5 dark:text-white'>  
            Chart your
            </p> 
            <h1 data-aos="fade-right" className='text-3xl md:text-6xl md:mt-2 mt-1 font-bold bg-gradient-to-r from-cyan-700 to-pink-600 bg-clip-text text-transparent dark:text-white'>
                 educational odyssey with online learning
        </h1> 
        <p className='text-gray-800 mt-3 md:mt-6 font-Font dark:text-white'>
            Tansforming ambitions into acheivements by assisting learners to gain admission to 
            renowned online universties nationwide.
        </p>
        <button className="bg-[#573BFF] text-white px-4 py-2 rounded-2xl mt-6 inline-flex font-semibold hover:bg-orange-500
         duration-300 shadow-md"
         onClick={()=>document.getElementById('my_modal_1').showModal()} >
          Get Admission
        <FaLongArrowAltRight className='mt-[3px] ml-2 text-[20px]' />
        </button>
        <Enrollment/>
        </div>

       <div className='w-full md:w-1/2 order-1'>
        <img src={pic} className='object-fit object-contain md:w-[430px] md:ml-20 ' alt="" />
       </div>
    </div>
    
    
    </>
  )
}

export default Banner