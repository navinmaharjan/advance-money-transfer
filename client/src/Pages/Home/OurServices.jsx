import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="bg-offWhite py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl pb-8 font-light w-full text-start">
            Our <span className="text-brand">Services</span>
          </h1>
          <div className="flex gap-4 items-center">
            <div className="bg-white w-1/3 border p-8 rounded-lg h-60 flex flex-col">
              <h1 className="text-2xl text-brand">Immediate Cash</h1>
              <p className="text-xl font-light text-slate-700 pt-4">
                Immediate cash payment to the "receivers" from convenient
                location/ paying counters.
              </p>
            </div>

            <div className="bg-white w-1/3 border p-8 rounded-lg h-60 flex flex-col">
              <h1 className="text-2xl text-brand">Deposits</h1>
              <p className="text-xl font-light text-slate-700 pt-4">
                Arrange to deposits -total and/or portion of the "send money" as
                instructed by the "sender" in bank account.
              </p>
            </div>

            <div className="bg-white w-1/3 border p-8 rounded-lg h-60 flex flex-col">
              <h1 className="text-2xl text-brand">Disable Customers</h1>
              <p className="text-xl font-light text-slate-700 pt-4">
                Home payment to elderly, sick and disable receivers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
