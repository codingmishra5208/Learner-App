import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import Enrollment from "../../Components/Enrollment/Enrollment";

const img =
  "https://www.onlinepathshalahub.com/website-front/img/all-img/about-image-2.jpg";
const img2 =
  "https://www.onlinepathshalahub.com/website-front/img/all-img/about-shape-bg.png";
const img3 =
  "https://www.onlinepathshalahub.com/website-front/img/all-img/about-shape.png";
const img4 =
  "https://www.onlinepathshalahub.com/website-front/img/icon/top-title.svg";

const About = () => {
  
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-28 px-4 py-36 bg-slate-50">
        <div className="flex flex-col md:flex-row py-7 ">
          <div className="md:w-1/2">
            <h1 className="text-xl font-semibold">
              About Us
              <img src={img4} className="inline-flex ml-2" alt="" />
            </h1>
            <p className="text-3xl md:text-5xl mt-7 text-gray-600">
              Fueling ambitions: where curiosity meets Innovation
            </p>
            <p className="mt-8 text-justify text-gray-500">
              Welcome to Online Learner's Hub, a renowned online education
              portal navigating the academic landscape in the contemporary
              world. At Online Learner's Hub, we have expertise in guiding
              students through the intricacies might face in securing their
              admissions to renowned universities nationwide. With a team of
              seasoned counseling experts, we offer personalized assistance to
              students that is tailored to their unique aspirations and academic
              profiles.
            </p>
            <p className="mt-8 text-justify text-gray-500">
              Whether you’re willing to gain admission to an esteemed
              university, prestigious college, or a specialized program, we are
              here to help in assisting you to pave the path to success with our
              tailored expertise in the domain.
            </p>
            <p className="mt-8 text-justify text-gray-500">
              Online  Hub is your trusted advisor on your journey to
              assume higher education online.
            </p>
            <hr className="mt-8" />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-xl mt-6 inline-flex font-semibold hover:bg-[#573BFF]
         duration-300 shadow-md"
            onClick={()=>document.getElementById("my_modal_1").showModal()}>
              Get Enrolled
              <FaLongArrowAltRight className="mt-[3px] ml-2 text-[20px]" />
            </button>
             <Enrollment/>
          </div>

          <div className="mt-9 md:ml-20 md:mt-60 relative">
            <img src={img} className="" alt="" />
            <img
              src={img2}
              className=" absolute hidden md:block top-[330px] md:top-[350px] md:right-[7px]"
              alt=""
            />
            <h1 className="absolute  md:top-[400px] md:right-[60px] text-2xl text-semibold text-white">
              5+ years Of Experiences
            </h1>
          </div>
        </div>
          
           <div>
            
           <h1 className="mt-10 md:mt-32 text-center text-4xl font-semibold text-gray-600 ">A Few Frequently Asked questions</h1>
        <div className="join join-vertical w-full mt-16 shadow-lg">
          <div className="collapse collapse-arrow join-item border-base-300 border ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-xl font-semibold">
              What is Online Learner Hub ?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">Online Pathshala Hub is a dedicated online platform
                 that assists learners gain admission to their desired online courses from top-notch online universities nationwide.
                 </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl font-medium">
               What makes Online Learners Hub different from other educational portals ?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              The personalized approach of Online Pathshala Hub, our partnership with leading universities across the nation that hold approvals from several statutory
               bodies such as CS , IT and our commitment to their success rate set us apart in helping students achieve their learning goals.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl font-medium">
             How can one request a consultation from Online Learner Hub ?
            </div>
            <div className="collapse-content">
              <p className="text-gray-500">
              Students are advised to visit the official website of the Online Learner's Hub
               and log in to our website by fulfilling their credentials along with their contact details.
               Students can request a counseling session with sound counselors and will get a call from our sound counselors within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
