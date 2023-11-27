import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="bg-offWhite py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl pb-8 font-light">
            Our <span className="text-brand">Services</span>
          </h1>
          <div className="flex gap-4 items-center">
            <div className="bg-white w-1/3 border p-8 rounded-lg flex flex-col">
              <h1 className="text-2xl text-brand">Immediate Cash</h1>
              <p className="text-extrathin">
                Immediate cash payment to the "receivers" from convenient
                location/ paying counters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
