import React from 'react'

const img="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png";
const img2="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png";
const img3="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png";


const Advantage = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10  dark:bg-slate-900 dark:text-white'>
        <h1  className='text-center text-3xl text-gray-700 md:text-4xl font-Font font-bold dark:text-white'>
            Get the Learner's Advantage
        </h1>

           <div className='flex flex-col md:flex-row justify-between gap-10 py-10 md:py-16 px-10'>

                 <div className='md:w-1/4 flex flex-col items-center gap-3'>
                     <img src={img}  alt="" />    
                      <h1 className='text-[20px] md:text-xl text-gray-700 text-center dark:text-white'>
                        Conceptual clarity through visualisation
                        </h1> 
                 </div>

                 <div className='md:w-1/4 flex flex-col items-center gap-3'> 
                     <img src={img2} alt="" />    
                      <h1 className='text-[20px] md:text-xl text-gray-700 text-center dark:text-white'>
                          Personalised learning programs
                        </h1> 
               </div>
                <div className='md:w-1/4 flex flex-col items-center gap-3'>
                  <img src={img3} alt="" />    
                    <h1 className='text-[20px] md:text-xl text-gray-700 text-center dark:text-white'>
                        Unmatched individual attention
                    </h1> 
                </div>
            </div>        
          
    </div>
  )
}

export default Advantage