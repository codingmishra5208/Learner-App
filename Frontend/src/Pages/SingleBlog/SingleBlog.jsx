import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

 
const SingleBlog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null); // Initialize with null for better condition checking
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popularBlogs, setPopularBlogs]=useState([]);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blog/${id}`); // Correct URL
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(data);
        setBlogPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(()=>{
     fetch('http://localhost:8080/blog').then(res =>res.json()).then(data=> setPopularBlogs(data.slice(0,15)))

  },[])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blogPost) return <div>No blog post found</div>;

  return (
    <div>
      <div className="py-20 md:py-36 bg-black text-center text-orange-400 px-4">
        <h2 className="text-5xl mt-10 md:mt-0 lg:text-7xl leading-snug font-bold mb-5">
          Single Blog
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto my-12 gap-12 flex flex-col md:flex-row px-5">

        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={blogPost.image}
              alt=""
              className="w-full mx-auto rounded "
            />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {blogPost.title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />{" "}
            {blogPost.author} | {blogPost.published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />{" "}
            {blogPost.reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{blogPost.content}</p>

          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              excepturi repellendus aspernatur possimus aut, dolorum itaque
              dolor necessitatibus totam quibusdam, mollitia sit nemo reiciendis
              hic. Quas vitae rerum quo officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              excepturi repellendus aspernatur possimus aut, dolorum itaque
              dolor necessitatibus totam quibusdam, mollitia sit nemo reiciendis
              hic. Quas vitae rerum quo officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              excepturi repellendus aspernatur possimus aut, dolorum itaque
            </p>
          </div>
        </div>
 
        <div className="lg:w-1/5">
           <div>
              <h3 className="text-2xl font-semibold px-4 text-orange-500">Latest Blogs</h3>
               <div>
                {
                  popularBlogs.slice(0,5).map(blog => <div key={blog._id} className="my-5 border-b-2 border-spacing-2 px-4">

                      <h4 className="font-medium mb-2">{blog.title}</h4>
                      <Link to='/' className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                        Read more <FaArrowRight className="mt-1 ml-2"/>
                      </Link>
                     </div>) 
                }
               </div>
           </div>
            </div>

      </div>
    </div>
  );
};

export default SingleBlog;
