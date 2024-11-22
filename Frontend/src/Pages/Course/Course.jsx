import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Course = ({AddtoCart}) => {

  
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 cards
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8080/fullcourse");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Load 3 more cards
  };

  const showLess = () => {
    setVisibleCount(3); // Reset to show only 3 cards
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-24">
        <div className="flex justify-center items-center mb-5">
          <div className="flex w-[80%] md:w-[35%] mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Courses..."
                className="w-full px-3 py-2 border rounded-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              />
              <button className="absolute right-0 top-0 px-4 py-2 border bg-gray-100 rounded-full">
                <CiSearch size={"24px"} />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
          {filteredItems.slice(0, visibleCount).map((data, id) => (
            <div
              className="border p-5 flex flex-col rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
              key={id}
            >
              <Link to={`/fullcourse/${data.name}`}
               className="flex-grow">
                <img
                  src={data.image} 
                  className="object-cover h-48 w-full rounded-md hover:scale-95 transition-transform duration-200 cursor-pointer"
                  alt={data.name}
                />
              </Link>
              <div className="flex flex-col mt-3">
                <p className="text-lg font-semibold">{data.name}</p>
                <h1 className="line-clamp-2 mt-2 text-gray-600 dark:text-white">
                  {data.title}
                </h1>
                <p className="text-pink-700 font-semibold mt-2">{data.price}</p>
                <div className="flex gap-2 justify-between items-center mt-3">
                  <p className="text-gray-700 font-semibold md:text-sm">{data.category}</p>

                  <button className="border rounded-xl bg-[#573BFF] text-white text-sm md:text-base font-semibold
                   px-4 py-1 hover:bg-orange-500 transition duration-300"  onClick={() => AddtoCart(data)}  >
                   Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
        {/* Load More Property */}
        <div className="flex justify-center mt-5">
          {visibleCount < filteredItems.length ? (
            <button
              onClick={loadMore}
              className="border rounded-xl bg-[#573BFF] text-white font-semibold px-4 py-2 hover:bg-red-500 transition duration-300"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="border rounded-xl bg-[#573BFF] text-white font-semibold px-4 py-2 hover:bg-orange-500 transition duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Course;