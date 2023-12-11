import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <>
      <div className="bg-offWhite py-4 sm:py-12">
        <div className="container mx-auto px-4 sm:px-0">
          <h1 className="text-2xl sm:text-2xl pb-4 sm:pb-4 font-light w-full text-center">
            Our <span className="text-brand">Services</span>
          </h1>
          <div
            className="flex gap-4 items-center flex-col sm:pb-4 xl:flex-row md:flex-row md:flex-wrap xl:flex-nowrap"
            data-aos="zoom-out-up"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <Link
              to="/services"
              className="bg-white md:w-[376px] lg:w-[500px] xl:w-1/3 border p-4 sm:p-8 rounded-lg md:h-60 xl:h-72 flex flex-col shadow-md cursor-pointer"
            >
              <i className="fa-solid fa-money-bill-transfer text-4xl sm:text-5xl text-brand pb-4 text-center"></i>
              <h1 className="text-xl sm:text-xl text-brand text-center">
                Immediate Cash
              </h1>
              <p className="sm:text-base text-center font-light text-slate-700 sm:pt-4">
                Immediate cash payment to the "receivers" from convenient
                location/ paying counters.
              </p>
            </Link>

            <Link
              to="/services"
              className="bg-white md:w-[376px] lg:w-[500px] xl:w-1/3 border p-4 sm:p-8 rounded-lg md:h-60 xl:h-72 flex flex-col shadow-md cursor-pointer"
            >
              <i className="fa-solid fa-sack-dollar text-4xl sm:text-5xl text-brand pb-4 text-center"></i>
              <h1 className="text-xl sm:text-xl text-brand text-center">Instant Deposits</h1>
              <p className="sm:text-base text-center font-light text-slate-700 sm:pt-4">
                Arrange to deposits -total and/or portion of the "send money" as
                instructed by the "sender" in bank account.
              </p>
            </Link>

            <Link
              to="/services"
              className="bg-white md:w-[376px] lg:w-[500px] xl:w-1/3 border p-4 sm:p-8 rounded-lg md:h-60 xl:h-72 flex flex-col shadow-md cursor-pointer"
            >
              <i className="fa-brands fa-accessible-icon text-4xl sm:text-5xl text-brand  pb-4 text-center"></i>
              <h1 className="text-xl sm:text-xl text-brand text-center">
                Differently Able Customers
              </h1>
              <p className="sm:text-base text-center font-light text-slate-700 sm:pt-4">
                Home payment to elderly, sick and disable receivers.
              </p>
            </Link>

            <Link
              to="/services"
              className="bg-white md:w-[376px] lg:w-[500px] xl:w-1/3 border p-4 sm:p-8 rounded-lg md:h-60 xl:h-72 flex flex-col shadow-md cursor-pointer"
            >
              <i className="fa-solid fa-wallet text-4xl sm:text-5xl text-brand  pb-4 text-center"></i>
              <h1 className="text-xl sm:text-xl text-brand text-center">
                Wallet
              </h1>
              <p className="sm:text-base text-center font-light text-slate-700 sm:pt-4">
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
