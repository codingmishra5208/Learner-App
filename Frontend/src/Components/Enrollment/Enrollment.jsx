import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Enrollment = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
   const [academyCourse, setAcademyCourse] = useState('');
  const States = [
    'Uttar Pradesh',
    'Hyderabad',
    'Rajasthan',
    'Uttarakhand',
    'MadhyaPradesh',
    'Mumbai',
    'Bihar',
    'jharkhand',
    'Oddisa',
    'Assam',
    'Meghalaya',
    'kerala',
    'Tamil Nadu',
  ];
   
  const Course = [
     'React Js',
     'Node Js',
      'Phyton',
      'C Programming',
       'Full Frontend',
        'Full Backend',        

  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/Admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if(result){
        toast.success("Thanku..Your Form Submitted!!");
        document.getElementById("my_modal_1").close();
         setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
         },3000)
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box border">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            {/* if there is a button in form, it will close the modal */}
              
            <Link to='/'
                className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5"
                onClick={()=> document.getElementById("my_modal_1").close()}
              >
                ✕
              </Link>
        
          <div className="md:border px-4 py-4">
          <h3 className="font-bold text-lg text-center">Learner's</h3>
          <p className="font-semibold text-orange-500 text-center">College ab aapke dwar</p>
          <p className="py-4 text-center px-8 text-sm md:text-base text-gray-500">
            Need assistance? Fill out the form below to get personalized call from our experts.
            </p>
             <hr/>

             <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="name"
                className="md:w-80 px-3 py-1 border rounded-2xl outline-none"
                {...register("name", { required: true })}
              />
              <br/> 
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Your email</span>
              <br />
              <input
                type="email"
                placeholder="Your email"
                className="md:w-80 px-3 py-1 border rounded-2xl outline-none"
                {...register("email", { required: true })}
              />
              <br/> 
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Phone</span>
              <br />
              <input
                type="text"
                placeholder="Phone"
                className="md:w-80 px-3 py-1 border rounded-2xl outline-none"
                {...register("phone", { required: true })}
              />
              <br/> 
              {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
        <span className="">Select state</span>
          <br/>
        <select
          {...register('state', { required: true })} 
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="md:w-80 px-3 py-1 border rounded-2xl outline-none"
          required
          
        >
          <option value="" className="text-bold">Select states</option>
          {States.map((state, index) => (
            <option key={index} value={state} className="">
              {state}
            </option>
          ))}
        </select>        
        {errors.state && <span className="text-sm text-red-500">This field is required</span>}
      </div>     

      <div className="mt-4 space-y-2">
        <span className="">Select Course</span>
          <br/>
        <select
            {...register('course', { required: true })}
          value={academyCourse}
          onChange={(e) => setAcademyCourse(e.target.value)}
          className="md:w-80 px-3 py-1 border rounded-2xl outline-none"
        
        >
          <option value="" className="text-bold">Select courses</option>
          {Course.map((state, index) => (
            <option key={index} value={state} className="">
              {state}
            </option>
          ))}
          
        </select>        
        {errors.course  && <span className="text-sm  text-red-500">This field is required</span>}
      </div>     
      

      <hr className="mt-5"/>  
        <h1 className="mt-5 text-center text-gray-600 font-semibold">I agree to the terms of service</h1>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
          
          </div>
          </form>
          </div>
      </dialog>
    </div>
  );
};

export default Enrollment;

