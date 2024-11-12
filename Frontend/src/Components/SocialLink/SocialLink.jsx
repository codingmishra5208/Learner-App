import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const SocialIcons = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2  flex-col space-y-4 p-4 hidden md:flex border bg-white shadow-2xl rounded-2xl">
      <a href="" className="text-blue-500 ">
        <i className="fa fa-facebook fa-lg"></i>
      </a>
      <a href="#" className="text-orange-500 ">
        <i className="fa fa-twitter fa-lg"></i>
      </a>
      <a href="#" className="text-red-500 ">
        <i className="fa fa-instagram fa-lg"></i>
      </a>
      <a href="#" className="text-pink-600 ">
        <i className="fa fa-linkedin fa-lg"></i>
      </a>
    </div>
  );
}

export default SocialIcons;