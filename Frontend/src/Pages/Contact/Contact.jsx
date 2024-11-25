import React from "react";
import Footer from "../../Components/Footer/Footer";
import { CiLocationArrow1 } from "react-icons/ci";

const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.2260548880827!2d80.48589067413435!3d26.545004875798398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c15b77b47f1db%3A0xb195ae5656cb2526!2sDhawan%20Rd%2C%20Unnao%2C%20Uttar%20Pradesh%20209801!5e0!3m2!1sen!2sin!4v1730697679146!5m2!1sen!2sin"       

const Contact = () => {
  const whatsappNumber = "9305949450";
 const img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png";
 
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-36 bg-slate-50 dark:bg-slate-900 dark:text-white ">
        <h1  className="font-bold text-4xl ">Contact Us</h1>
        <p className="text-gray-600 text-md mt-5 dark:text-white">
          This is the
          <span className="font-semibold text-black font-Font dark:text-white">
            official page of Learner's Academy,
          </span>
          where you can share all your queries, feedback, complaints, or any
          concern you may have about our centers, courses, and programs.
        </p>
        <p className="mt-5 text-md text-gray-600 font-Font dark:text-white">
          <span className="font-bold text-xl">Learner's Academy,</span> India's
          leading student-oriented Edtech organization, is here to help all the
          students to solve their grievances. We're here to help you. We aim to
          solve all the queries within 7 days. You can call on Learner's Academy
          official Contact No.<span className=" font-bold"> 9305949450,</span>{" "}
          24 x 7. If the phone is busy, we're resolving someone else's queries.
          We request you to contact us again after 15 minutes so that we can
          address your query or concern you may have regarding lectures or
          course material. You may notify us in the "contact us" section only.
          Your suggestions will help us improve and give you and all the
          children a bright future.
        </p>
        <p className="mt-5 text-gray-600 font-Font dark:text-white">
          In Case of any grievance, don't hesitate to get in touch with us on
          Physics Wallah's official contact number{" "}
          <span className="font-bold">09305949450.</span> Or you can write to us
          at <span className="font-bold">support@Learner's.live</span>
        </p>
        <hr className="mt-5" />

        <div className="mt-8 md:mt-24 flex md:flex-row flex-col gap-16">
          <adress className="md:w-1/3">
            <h1 className="text-3xl font-medium text-gray-700 dark:text-white">
              Learner's Academy
            </h1>
            <h2 className="text-xl text-gray-700 mt-2 dark:text-white">KLJ Unnao one</h2>
            <p className="w-2/3 mt-3 text-gray-700 dark:text-white">
              B 8, Block A, Near PNB Bank, KANPUR ROAD, DHAWAN ROAD, UNNAO
              209801,
            </p>
            <h1 className="mt-3 text-blue-500 font-semibold text-xl  font-Font dark:text-white">
              support@LA.live
            </h1>
            <a href={url} target="_blank">
            <button className="inline-flex mt-5 border  rounded-md px-6 py-3  text-blue-500 text-[20px] hover:bg-blue-700 hover:text-white">
              <CiLocationArrow1 className="mt-1 mr-2"
                />
              Get Direction
            </button>
            </a>
          </adress>
          <div className="w-full h-0 pb-[106.25%] md:pb-[36.25%] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.2260548880827!2d80.48589067413435!3d26.545004875798398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c15b77b47f1db%3A0xb195ae5656cb2526!2sDhawan%20Rd%2C%20Unnao%2C%20Uttar%20Pradesh%20209801!5e0!3m2!1sen!2sin!4v1730697679146!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              Loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
         
        <div className="">     
            <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
                <img 
                    src={img}
                    alt="WhatsApp" 
                    className="w-8 h-8"
                />
            </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
