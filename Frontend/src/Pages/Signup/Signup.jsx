import React from 'react'
import { Link, useNavigate, NavigationType, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import toast  from 'react-hot-toast';


const Signup = () => {
    const location = useLocation();
   const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        
          const userInfo={
             fullname:data.fullname,
             email:data.email,
             password:data.password,
          }
         await axios.post('http://localhost:8080/signup',userInfo)
           .then((res)=>{
             console.log(res.data)
              if(res.data){
                toast.success("SignUp Successfully!!");
                 navigate(from, {replace: true});
              }
              localStorage.setItem("Users",JSON.stringify(res.data.user));
           }).catch((err)=>{
              if(err.response){
                 console.log(err);
                  toast.error("Error: "+err.response.data.message);
              }
           })
      }

  return ( 
     <>
    
      <div>
       
        
       <div className="flex items-center justify-center h-screen bg-gray-100 mt-8">

      <form className="bg-white p-8 rounded shadow-md w-full  max-w-sm mt-5" onSubmit={handleSubmit(onSubmit)} >
        <Link to='/' className='absolute right-[50px] md:right-[530px] font-bold'>✕</Link>
        <h2 className="text-2xl font-bold mb-6">SignUp!!</h2>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded"
            {...register("fullname", { required: true })}
          />
           {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="block w-full p-2 border border-gray-300 rounded"
            {...register("email", { required: true })}
          />
           {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="block w-full p-2 border border-gray-300 rounded"
            {...register("password", { required: true })}
          />
            
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
        </form>
      </div>
    <Footer/>
    </div>
     </>
  )
}

export default Signup