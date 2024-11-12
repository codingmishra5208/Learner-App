import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";

const SingleFullCourse = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `http://localhost:3014/fullcourse/${param.name}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchDetails();
  }, [param.name]);

  return (
    <>
     
      <div className="max-w-screen-2xl container mx-auto py-16">
        <div>
          {product.map((item, id) => (
            <div key={id}>
              <div className="bg-[#EB427E] px-4 md:px-20 py-10 md:py-20">
                <h1 className="uppercase font-semibold text-3xl md:text-4xl text-white">
                  {item.title}
                </h1>
                <p className="text-white text-lg md:text-xl mt-3 font-bold">
                  Empowering Learners: Dive into the World of Technology!
                </p>
                <h2 className="text-white mt-3 text-xl md:text-2xl font-extrabold">
                  Learner's Academy
                </h2>

                <p className="text-white mt-2 font-extrabold">
                  Special Discount Price
                </p>
                <div className="flex  md:flex-row items-center gap-4 md:gap-10">
                  <h1 className="text-white font-bold mt-1 text-2xl md:text-3xl">
                    {item.price}
                  </h1>
                  <h1 className="text-white font-bold mt-1 text-lg md:text-xl line-through">
                    2000Rs
                  </h1>
                </div>
                <p className="mt-2 bg-white w-24 px-2 text-green-600 font-bold">
                  (33% OFF)
                </p>
              </div>

              <div className="px-4 md:px-20 py-10 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <h1 className="uppercase mt-2 font-semibold text-gray-800 text-2xl md:text-3xl">
                    {item.name}
                  </h1>
                  <p className="mt-3 text-gray-600 text-base font-semibold">
                    {item.description}
                  </p>
                  <hr className="mt-10" />
                </div>
                <div className="md:w-1/2  md:ml-10">
                  <img
                    src={item.image}
                    className="w-full h-60 md:h-80 object-contain border border-pink-300 px-4 py-4 hover:scale-95 transition-transform duration-200 cursor-pointer rounded-md"
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8FAFC] px-4 md:px-20 py-10">
          <h1 className="text-xl font-bold">Batch Details</h1>
          <p className="mt-4 font-semibold text-gray-700">
            01. <br />
            Super 1500 batch is for the candidates who are preparing for the
            It Skills. 
          </p>
          <p className="font-semibold text-gray-700">
            02. <br />
            Lecture Planner has been uploaded in the Batch's Notice section.
          </p>
          <p className="font-semibold text-gray-700">
            03. <br />
            Classes will be conducted from Monday to Sunday.
          </p>
          <p className="font-semibold text-gray-700">
            04. <br />
            MCQs, MSQs, NATs types of questions aligned with the GATE pattern.
          </p>
          <p className="font-semibold text-gray-700">
            05. <br />
            Quality Questions will be discussed in the live class.
          </p>
          <p className="font-semibold text-gray-700">
            06. <br />
            The Doubt Engine will be there for solving the student’s queries
            and doubts.
          </p>
          <p className="font-semibold text-gray-700">
            07. <br />
            No Refund Policy.
          </p>

          <p className="mt-7 font-semibold">
            The registration fee is included in the price of the batch which is
            showing on the website. The breakup of registration fee will be
            mentioned on invoice. You may be provided with access to Notes,
            PYQs, Mock Test Papers, AITS Test Series, Previous year batches &
            other materials; the access can vary depending on the batch you
            purchase, so that exact details might change from one batch to
            another.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleFullCourse;