import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const BlogPage = () => {
   const [blogs, setBlogs] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState('All');
   const [visibleCount, setVisibleCount] = useState(6); // Initial number of blogs to display

   useEffect(() => {
     const fetchBlogs = async () => {
        try {
          const res = await axios('http://localhost:9000/blog');
         
          setBlogs(res.data);
        } catch (err) {
          console.log(err);
        }
     };

     fetchBlogs();
   }, []);

   const categories = ['All', 'AI', 'Health', 'Tech', 'Apps','Security'];

   const filteredBlogs = selectedCategory === 'All'
     ? blogs
     : blogs.filter(blog => blog.category === selectedCategory);

   const loadMoreBlogs = () => {
     setVisibleCount(prevCount => prevCount + 4); // Load 3 more blogs
   };

   const showLessBlogs = () => {
     setVisibleCount(6); // Reset to initial count
   };

   return (
     <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-28'>
         <div className=''>
           <h1 className='text-gray-700 leading-tight text-2xl md:text-4xl font-bold text-center'>Welcome to Our Blog</h1>
           <p className='text-justify md:px-52 font-semibold text-gray-500 md:text-center py-5'>
             Start your blog today and join a community of writers and readers who 
             are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.
           </p>
         </div>

         <div className='text-center py-5'>
           <select
             value={selectedCategory}
             onChange={(e) => setSelectedCategory(e.target.value)}
             className='border rounded-lg px-3 md:w-[400px] w-[200px] py-2'
           >
             {categories.map(category => (
               <option key={category} value={category}>
                 {category}
               </option>
             ))}
           </select>
         </div>

         <div>
           <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5'>
             {filteredBlogs.slice(0, visibleCount).map((item) => (
               <Link to={`/singleblog/${item._id}`} key={item._id} className='p-5 shadow-lg rounded cursor-pointer'>
                 <div>
                   <img src={item.image} alt="" className='w-full' />
                 </div>
                 <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
                   {item.title}
                 </h3>
                 <p className='mb-2 text-gray-600 text-sm'>
                   <FaUser className='inline-flex items-center mr-2' />{item.author}
                 </p>
                 <p className='text-sm text-gray-500'>Published: {item.published_date}</p>
               </Link>
             ))}
           </div>

           <div className='text-center mt-5'>
             {visibleCount < filteredBlogs.length ? (
               <button
                 onClick={loadMoreBlogs}
                 className='bg-blue-600 text-white rounded px-4 py-2'
               >
                 Load More
               </button>
             ) : (
               <button
                 onClick={showLessBlogs}
                 className='bg-gray-600 text-white rounded px-4 py-2'
               >
                 Show Less
               </button>
             )}
           </div>
         </div>
       </div>
       <Footer/>
     </>
   );
};

export default BlogPage;