import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const img="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=640";
const Explore = () => {
  return (
    <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-20 bg-slate-50 flex flex-col md:flex-row dark:bg-slate-900 dark:text-white'>
       <div   className='w-full md:w-1/2'>
        <img src={img} alt="" />
       </div>
         
         <div data-aos="fade-right" className='w-full md:w-1/2 px-5 '>
          <h1  className='text-[#573BFF] font-Font text-2xl mt-5 font-semibold dark:text-white'>About Our Courses</h1>
            <p className='text-3xl md:text-5xl font-bold mt-2 text-gray-800 dark:text-white'>
                Explore Thousands of Creative Classes.
            </p>
             <p className='text-base mt-4 md:mt-7 md:w-96 text-gray-500 dark:text-white'>
               Dramatically supply transparent deliverable beforese
               backward comp internal or 'organic' source. Comp
               transparent leverage other.
             </p>
              <Link to='/about'>
             <a className="bg-[#573BFF] text-white px-4 py-2 rounded-2xl mt-6 inline-flex font-semibold hover:bg-orange-500
         duration-300 shadow-md">Read More
              </a>
              </Link>
         </div>
    </div>
  )
}

export default Explore;