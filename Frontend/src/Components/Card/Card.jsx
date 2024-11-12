import React, { useEffect, useState } from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import {Link} from 'react-router-dom';

import axios from "axios";

const Card = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3014/paidcourse");
        
        setItem(res.data);
      } catch (error) {
        
      }
    };

    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-32 px-4 py-10 bg-lime-50 dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-Font font-bold">Our Free Courses</h1>
          <p className="text-gray-500 md:w-[500px] mt-4 text-base dark:text-white">
            Our free courses are designed to empower learners of all levels,
            providing access to high-quality educational resources without any
            financial barriers.
          </p>
        </div>
        <div className="md:block hidden">
          <div className="inline-flex mt-3 ">
            <h1 className=" text-blue-700 font-semibold mr-4">See More</h1>
            <CiSquareChevLeft className="text-[30px] cursor-pointer mr-2" />
            <CiSquareChevRight className="text-[30px] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* cards Section */}
       <div>
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg gap-3 py-10">
              {
                item.map((data,id)=>{
                     return(
                      
                    <Link to={`/paidcourse/${data.name}`} className="border px-5 py-5" key={id}>
                       <div className=''>
                          <img src={data.image} className="object-contain h-48 w-80 hover:scale-95 duration-200 cursor-pointer" alt="" />
                          </div>
                             <div className="flex mt-3">
                            <div>
                                <p className="text-xl font-semibold">{data.name}</p>
                                 <h1 className="line-clamp-2 mt-2 text-gray-600 dark:text-white">{data.title}</h1>
                                </div>
                                  <div>
                                    <p className="text-pink-700 font-semibold">{data.price}</p>
                                     </div>
                                 </div>
                                 <div className="flex justify-between mt-3">
                                    <div>
                                        <p className="font-semibold">{data.category}</p>
                                        </div>
                                        <div>
                                            <button className="border rounded-xl bg-[#573BFF] text-white font-Font font-semibold px-4 py-1 hover:bg-orange-500 duration-300">
                                                Try Demo
                                            </button>
                                            </div>
                                    </div>
                      </Link>
                 )})
              }
          </div>
        </div>     
 

    </div>
  );
};
export default Card;
