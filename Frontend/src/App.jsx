import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Course from './Pages/Course/Course';
import Signup from "./Pages/Signup/Signup";
import About from "./Pages/About/About";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import SingleCourse from "./Pages/SingleCourse/SingleCourse";
import Contact from "./Pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleFullCourse from "./Pages/SingleFullCourse/SingleFullCourse";
import AddCart from "./Pages/AddCart/AddCart";
import Navbar from "./Components/Navbar/Navbar";
import BlogPage from "./Pages/Blog/BlogPage";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";


const App = () => {
   const [cart, setCart] = useState([]);
   const [promocode, setPromoCode] = useState("");
   const [invalid, setInvalid] = useState("Invalid PromoCode");
   const [discount, setDiscount] = useState(0);
   
   // Add to cart function
   const AddtoCart = (product) => {
       const isProductExist = cart.find((item) => item.id === product.id);
       
       if (isProductExist) {
           const updatedCart = cart.map((item) =>
               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
           );
           setCart(updatedCart);
       } else {
           const newProduct = { ...product, quantity: 1 };
           setCart([...cart, newProduct]);
       }
   };

   // Increment quantity
   const handleInc = (id) => {        
       const incQuantity = cart.map((item) => (
           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
       ));
       setCart(incQuantity);
   };

   // Decrement quantity
   const handleDec = (id) => {
       const decQuantity = cart.map((item) => (
           item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
       ));
       setCart(decQuantity);
   };

   // Remove product
   const handleRemove = (id) => {
       const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
       setCart(updateByFilter);
   };
   
   // Calculate total price
   const getTotalPrice = () => {
       const totalPrice = cart.reduce((total, cartReduceItem) => {
           return total + parseFloat(cartReduceItem.price) * cartReduceItem.quantity;
       }, 0);
       return parseFloat(totalPrice) - discount;
   };

   // Calculate total plus shipping
   const getTotalPlusTen = () => {
       return getTotalPrice() + 10;
   };

   // Promo code functions
   const applyPromoCode = () => {
       if (promocode === "DISCOUNT10") {
           setDiscount(getTotalPrice() * 0.1);
           setPromoCode("");
       } else {
           setInvalid(invalid);
       }
   };

   useEffect(() => {
       AOS.init({ duration: 500 }); // Animation duration
   }, []);
   
   const [authUser, setAuthUser] = useAuth();

   return (
       <div className="">
           <Navbar cart={cart} />
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/course' 
                   element={authUser ? <Course AddtoCart={AddtoCart} cart={cart} /> : <Navigate to='/signup' />} />

             

               <Route path='/about' 
                   element={authUser ? <About /> : <Navigate to='/signup' />} />
               <Route path="/paidcourse/:name" element={<SingleCourse />} />
               <Route path='/contact' element={<Contact />} />
               <Route path="/fullcourse/:name" element={<SingleFullCourse />} />
               <Route path='/addcart' element={<AddCart 
                   cart={cart} 
                   handleDec={handleDec} 
                   handleInc={handleInc} 
                   handleRemove={handleRemove} 
                   getTotalPrice={getTotalPrice} 
                   getTotalPlusTen={getTotalPlusTen}
                   applyPromoCode={applyPromoCode} 
                   promocode={promocode} 
                   setPromoCode={setPromoCode}
                   invalid={invalid} 
               />} />

               <Route path='/blog'
                element={authUser ? <BlogPage/> : <Navigate to='/singup' />} />
                <Route path="/singleblog/:_id" element={<SingleBlog/>} />
             
                <Route path='/signup' element={<Signup />} />
           </Routes>
           <Toaster />
       </div>
          
   );
};

export default App;