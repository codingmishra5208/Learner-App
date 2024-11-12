import React, { useState } from 'react'
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci"; 

const img4 =
  "https://www.onlinepathshalahub.com/website-front/img/icon/top-title.svg";


const Comments = () => {
    const Testimonial_data = [
      
       {
        img:"https://static.wixstatic.com/media/a37a29_5638406678d34676b7016458f7151bf7~mv2.jpg/v1/fill/w_196,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20240810-WA0020_edited.jpg",
         content_text:"The Full Stack Web Developer training sessions were eye-opening! They've equipped me with invaluable techniques that are already enhancing my workplace interactions. I highly recommend these workshops for anyone aiming to improve their professional skills!",
         testimonial_name:"Shubham Mishra",
          text_black:"Full Stack Developer",
       },
       
       {
        img:"https://static.wixstatic.com/media/a37a29_ea621e592bfe487394bcae9a88442e1b~mv2.jpg/v1/fill/w_196,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20240810-WA0022.jpg",
        content_text:"Participating in the good and bad touch awareness program was enlightening. It's crucial to teach children about personal boundaries and safety early on. I commend the team for handling this sensitive topic with compassion and clarity.",
        testimonial_name:"Suchit Kumar",
        text_black:"Designer",
      },
      {
        img:"https://static.wixstatic.com/media/a37a29_2bea71818ce1462bb34753534604ae2d~mv2.jpg/v1/crop/x_7,y_223,w_594,h_496/fill/w_196,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-20240326-WA0002.jpg",
        content_text:"The adolescence education and career counseling sessions were thought-provoking, offering a wide range of career options and innovative strategies. While I wished for more personalized guidance, I value the sessions for igniting new ideas and providing a strong foundation. I'm excited to see how they continue to evolve and improve!",
         testimonial_name:"kamini kumar",
          text_black:"nothing",
      },
    

    ]
    const [current,setCurrent] = useState(0);
     const length = Testimonial_data.length;


    const previous=()=>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
      const next=()=>{
         setCurrent(current === length -1 ? 0 : current+1 );
      }

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-40 px-4 py-10 dark:bg-slate-900'>
        <h1 className='font-bold text-3xl text-gray-700 inline-flex dark:text-white'>
            Our Review
            <img src={img4} className='ml-3 w-10'  alt="" /> 
            </h1>

             <div className='flex  my-auto  justify-center items-center' >
         <div className='mt-10 border bg-gray-700 px-5 py-5 shadow-md'>
           {
             Testimonial_data.map((item,index)=> index === current && <div key={index}>
                  <div className='pb-[20px] flex items-start gap-4'>
                      <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg" alt="" />
                    <h2 className='text-white text-base   md:text-xl font-Font font-bold'>{item.content_text}</h2>
                    </div>
                     <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                 <div>
                   <img src={item.img} className='w-20 h-20 rounded-full' alt="" />
                 </div>
                   <div>
                     <h6 className='text-white text-sm  md:text-lg font-bold font-Font'>{item.testimonial_name}</h6>
                      <span className='text-white text-sm md:text-base font-bold font-Font'>{item.text_black}</span>
                     </div>
                     </div>

                     <div className='flex  text-gray-400 cursor-pointer'>
                    <CiSquareChevLeft onClick={previous} size={35} />
                    <CiSquareChevRight onClick={next} size={35}  />
                      </div>

                 
                 </div>
             </div>)
           }   
         </div>
       </div>
    </div>
  )
}

export default Comments