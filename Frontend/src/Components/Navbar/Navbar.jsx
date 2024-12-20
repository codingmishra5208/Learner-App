import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Logout from "../Logout/Logout";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = ({ cart }) => {


  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;


  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);
   const name = localStorage.getItem("fullname");
  const NavItems = (
    <>
      <Link to='/' onClick={() => setDropdownOpen(false)}>
        <li><a>Home</a></li>
      </Link>
      <Link to='/about' onClick={() => setDropdownOpen(false)}>
        <li><a>About</a></li>
      </Link>
      <Link to='/course' onClick={() => setDropdownOpen(false)}>
        <li><a>Course</a></li>
      </Link>
      <Link to='/blog' onClick={() => setDropdownOpen(false)}>
        <li><a>Blog</a></li>
      </Link>
      <Link to='/contact' onClick={() => setDropdownOpen(false)}>
        <li><a>Contact</a></li>
      </Link>
       
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out drop-shadow-sm" : ""}`}>
      <div className="navbar bg-base-100 font-Font md:px-12 px-3 py-3 dark:bg-slate-900 dark:text-white flex justify-between  items-center">
        {/* Logo Section */}
        <div className="navbar-start flex items-center">
          <Link to='/'>
            <a className="text-xl sm:text-2xl md:ml-5 cursor-pointer font-semibold bg-gradient-to-r from-cyan-700 to-pink-600 bg-clip-text text-transparent">Learner's</a>
            <p className="font-semibold text-orange-500 md:block hidden">College ab aapke dwar</p>
             
          </Link>
          <div className="dropdown ml-4">
            <button
              tabIndex={0}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost lg:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className={`menu menu-sm dropdown-content rounded-box z-[1] text-white bg-[#002733] mt-3 w-56 p-3 shadow transition-all duration-300 ease-in-out font-mono ${dropdownOpen ? 'open' : ''}`}>
                {NavItems}
              </ul>
            )}
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{NavItems}</ul>
        </div>

        {/* Icons and Search Section */}
        <div className="navbar-end flex items-center">
          {/* Search Box */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border flex items-center gap-2 ml-4 rounded-md ">
               <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>
          {/* Theme Toggle */}
          <label className="swap swap-rotate ml-4">
            <input type="checkbox" className="theme-controller" value="synthwave" />
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,8.14,8.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,8.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <Link to='/addcart' className="relative">
            <div className="flex items-center">
              <p className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</p>
              <CiShoppingCart size={32} className="cursor-pointer" />
            </div>
          </Link>

          {
            authUser ? (
              <Logout />
            ) : (
              <div className="ml-4">
                <a className="bg-black dark:bg-white dark:text-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer font-semibold"
                  onClick={() => document.getElementById('my_modal_3').showModal()}>
                  Login
                </a>
                <Login />
              </div>
            )
          }
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Navbar;