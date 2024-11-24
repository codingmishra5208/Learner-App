import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const SingleBlog = () => {
  const { _id } = useParams(); // Destructure _id from useParams
  const [Blog, setBlog] = useState(null); // Initialize as null
  const [popularBlog,setPopularBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blog/${_id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(data);
        setBlog(data); // Set the single blog post
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [_id]);

  useEffect(()=>{
    fetch('http://localhost:8080/blog')
   .then(res => res.json())
   .then(data =>setPopularBlog(data.slice(0,15)));

  },[]);
 
  return (
    <>
    <div className="mt-20">
      <div className="py-20 md:py-36 bg-black text-center text-orange-400 px-4">
        <h2 className="text-5xl mt-10 md:mt-0 lg:text-7xl leading-snug font-bold mb-5">
          Single Blog
        </h2>
      </div>

      <div className="max-w-7xl mx-auto my-12 gap-12 flex flex-col md:flex-row px-5">
        {Blog ? (
          <div className="lg:w-3/4 mx-auto">
            <div>
              <img
                src={Blog.image}
                alt="Loading.."
                className="w-full rounded mx-auto"
              />
            </div>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {Blog.title}
            </h2>
            <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {Blog.author} | {Blog.published_date}
            </p>
            <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />{Blog.reading_time}
              </p>
            <p className="text-base text-gray-500 mb-6">{Blog.content}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
 
         <div className="lg:w-1/5">
          <div>
            <h3 className="text-2xl font-semibold px-4 text-orange-500">
               Latest Blog
            </h3>
             <div>
             {popularBlog.slice(0,5).map(blog => (
               <div key={blog._id} className="my-5 border-b-2 border-spacing-2 px-4">
               <h4 className="font-medium mb-2">{blog.title}</h4>
               <Link to='/' className="text-base pb-2 hover:text-blue-500 inline-flex items-center py-1">
                 Read more <FaArrowRight className="mt-1 ml-2"/>
               </Link>
             </div>
             ))}     
              
              </div>             
          </div>

          </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SingleBlog;
