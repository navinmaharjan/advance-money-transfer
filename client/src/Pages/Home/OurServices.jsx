import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <>
      <div className="bg-offWhite py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl pb-8 font-light w-full text-center">
            Our <span className="text-brand">Services</span>
          </h1>
          <div className="flex gap-4 items-center">
         
              <Link to="/services" className="bg-white w-1/3 border p-8 rounded-lg h-80 flex flex-col shadow-md cursor-pointer">
                <i className="fa-solid fa-money-bill-transfer text-7xl text-brand pb-4 text-center"></i>
                <h1 className="text-2xl text-brand text-center">
                  Immediate Cash
                </h1>
                <p className="text-xl font-light text-slate-700 pt-4">
                  Immediate cash payment to the "receivers" from convenient
                  location/ paying counters.
                </p>
              </Link>
   

            <Link to="/services" className="bg-white w-1/3 border p-8 rounded-lg h-80 flex flex-col shadow-md cursor-pointer">
              <i className="fa-solid fa-sack-dollar text-7xl text-brand pb-4 text-center"></i>
              <h1 className="text-2xl text-brand text-center">Deposits</h1>
              <p className="text-xl font-light text-slate-700 pt-4">
                Arrange to deposits -total and/or portion of the "send money" as
                instructed by the "sender" in bank account.
              </p>
            </Link>

            <Link to="/services" className="bg-white w-1/3 border p-8 rounded-lg h-80 flex flex-col shadow-md cursor-pointer">
              <i className="fa-brands fa-accessible-icon text-7xl text-brand  pb-4 text-center"></i>
              <h1 className="text-2xl text-brand text-center">
                Disable Customers
              </h1>
              <p className="text-xl font-light text-slate-700 pt-4">
                Home payment to elderly, sick and disable receivers.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
