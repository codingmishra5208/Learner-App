import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { TbUsersGroup } from "react-icons/tb";

const Stats = () => {
    const [counterOn,setCounterOn] = useState(false);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-32 px-4 md:py-8 bg-[#FFFFFF] dark:bg-slate-900 dark:text-white'>
         <div className='mb-7'>
          <h1 className='text-center text-3xl  text-gray-700 md:text-5xl font-Font  font-bold dark:text-white'>
            Our Clients
          </h1>
          </div>

          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >

             <div className='flex flex-col md:flex-row gap-7 justify-around py-12  bg-white shadow-inner dark:bg-slate-900'>
         <div className="flex flex-col items-center justify-center gap-2">
         <TbUsersGroup className='border rounded-full px-5 text-[90px] text-white bg-[#FFBC1F] shadow-lg shadow-yellow-600' />
           <h1 className='text-5xl font-bold text-gray-600 dark:text-white'>
              {counterOn &&  <CountUp start={0} end={15570} duration={2} delay={0} />}
              
           </h1>
           <p className='text-xl text-gray-700 dark:text-white'>Happy Student</p>
         </div>

         <div className="flex flex-col items-center justify-center gap-2">
         <TbUsersGroup className='border rounded-full px-5 text-[90px] text-white bg-[#FF7E84] shadow-pink-700 shadow-lg' />
           <h1 className='text-5xl font-bold text-gray-600 dark:text-white'>
              {counterOn &&  <CountUp start={0} end={500} duration={2} delay={0} />}
              
           </h1>
           <p className=' text-xl text-gray-700 dark:text-white'>Good Comment</p>
         </div>

         <div className="flex flex-col items-center justify-center gap-2">
         <TbUsersGroup className='border rounded-full px-5 text-[90px] text-white bg-[#30BEAD] shadow-blue-300 shadow-lg' />
           <h1 className='text-5xl font-bold text-gray-600 dark:text-white'>
              {counterOn &&  <CountUp start={0} end={35200} duration={2} delay={0} />}
              
           </h1>
           <p className=' text-xl text-gray-700 dark:text-white'>Services Download</p>
         </div>

         <div className="flex flex-col items-center justify-center gap-2">
           <TbUsersGroup className='border rounded-full px-5 text-[90px] text-white bg-[#8861DB] shadow-purple-700 shadow-lg' />
           <h1 className='text-5xl font-bold text-gray-600 dark:text-white'>
              {counterOn &&  <CountUp start={0} end={10} duration={55} delay={0} />}
              
           </h1>
           <p className='text-xl text-gray-700 dark:text-white'>Best Awards</p>
         </div>

         </div>
         </ScrollTrigger>
    </div>
  )
}

export default Stats