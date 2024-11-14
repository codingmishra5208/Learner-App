import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const img =
  "https://www.vedantu.com/cdn/images/new-home-page/B2/super-kid.webp";
const img2 =
  "https://www.vedantu.com/cdn/images/new-home-page/icons/hand-with-mic.svg";

const Unqiue = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-24 px-4 py-10 bg-[#FAFAFA]  dark:bg-slate-900 dark:text-white ">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-1/2">
         <img src={img2} alt="" />
          <h2 className="font-bold text-2xl mt-3 text-gray-700 dark:text-white">
            Whats Makes Us{" "}
            <span className="text-[#FF693D] text-3xl">Unique</span>
          </h2>
          <p className="text-justify md:mt-10 mt-7  text-gray-600 dark:text-white">
            Welcome to Online Learner's Hub, a renowned online education portal
            navigating the academic landscape in the contemporary world. At
            Online Learner's Hub, we have expertise in guiding students through
            the intricacies might face in securing their admissions to renowned
            universities nationwide. With a team of seasoned counseling experts,
            we offer personalized assistance to students that is tailored to
            their unique aspirations and academic profiles.
          </p>
          <p className="text-justify mt-5  text-gray-600 dark:text-white">
            Whether you’re willing to gain admission to an esteemed university,
            prestigious college, or a specialized program, we are here to help
            in assisting you to pave the path to success with our tailored
            expertise in the domain.
          </p>
           <hr className="mt-5"/>

            <div className="flex">
           <button className="bg-[#573BFF] text-white w-52 md:w-44 py-3 px-3 rounded-2xl  mt-10  inline-flex font-semibold hover:bg-orange-500
         duration-300 shadow-md"
          >
          More About Us
        <FaLongArrowAltRight className='mt-[3px] ml-2 text-[20px]' />
        </button>
           <p className="mt-3 ml-3 text-xl md:text-2xl  font-bold bg-gradient-to-r from-cyan-800 to-pink-600 bg-clip-text text-transparent dark:text-white">10+ <br/>
            Years Of Experiences</p>
        </div>
        </div>

        <div className="md:w-1/2 w-full mt-10 md:ml-24 md:mt-24 ">
          <img src={img} className="md:w-[500px] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Unqiue;
