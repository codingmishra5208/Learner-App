import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const AddCart = ({
  cart,
  handleInc,
  handleDec,
  handleRemove,
  getTotalPrice,
  getTotalPlusTen,
  applyPromoCode,
  promocode,
  setPromoCode,
  invalid,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-5 py-20 bg-lime-50">
        <div className="container mx-auto mt-10 ">
          <div className="flex flex-col md:flex-row shadow-md gap-3 my-10 ">
            <div className="w-full md:w-3/4 bg-white px-4 py-10 md:px-10 dark:bg-slate-900">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-xl md:text-2xl dark:text-white">Shopping Cart</h1>
                <h2 className="font-semibold text-xl md:text-2xl uppercase dark:text-white">
                  {cart.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 dark:text-white">
                  Course
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-white">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-white">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 dark:text-white">
                  Total
                </h3>
              </div>
              {/** Product Items */}
              {cart.map((cartItem, id) => (
                <div className="flex items-center hover:bg-gray-100 -mx-4 md:-mx-8 px-4 py-5" key={id}>
                  <div className="flex w-2/5">
                    <div className="w-16 md:w-20">
                      <img className="h-24 object-contain" src={cartItem.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-2 md:ml-4 flex-grow">
                      <span className="font-bold md:text-sm text-xs dark:text-white">{cartItem.name}</span>
                      <span className="text-red-500 text-xs dark:text-white">Brand Name</span>
                      <a
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs dark:text-white"
                        onClick={() => handleRemove(cartItem.id)}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5 gap-1 dark:text-white">
                    <button className="border px-2 py-1" onClick={() => handleDec(cartItem.id)}>-</button>
                    <button className="px-2">{cartItem.quantity}</button>
                    <button className="border px-2 py-1" onClick={() => handleInc(cartItem.id)}>+</button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm dark:text-white">{cartItem.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm dark:text-white">
                    {parseFloat(cartItem.price) * cartItem.quantity} Rs.
                  </span>
                </div>
              ))}

              <p
                className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer dark:text-white"
                onClick={() => navigate("/course")}
              >
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </p>
            </div>

            <div id="summary" className="md:w-1/4 px-4 py-10 mt-10 md:mt-0 bg-white dark:bg-slate-900">
              <h1 className="font-semibold text-xl md:text-2xl border-b pb-8 dark:text-white">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase dark:text-white">Item {cart.length}</span>
                <span className="font-semibold text-sm dark:text-white">{getTotalPrice()}</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase dark:text-white">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm ">
                  <option>Standard shipping - 10.00 Rs</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase dark:text-white">Promo Code</label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                  value={promocode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                {promocode && promocode !== "DISCOUNT10" ? (
                  <span>{invalid}</span>
                ) : (
                  <span className="text-red-500 font-semibold">use DISCOUNT10</span>
                )}
                <hr />
                {promocode === "DISCOUNT10" && (
                  <span className="text-green-500 dark:text-white">Promo code applied successfully</span>
                )}
              </div>

              <button
                className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase w-full"
                onClick={applyPromoCode}
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase dark:text-white">
                  <span>Total cost</span>
                  <span className="lowercase">{getTotalPlusTen()}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddCart;