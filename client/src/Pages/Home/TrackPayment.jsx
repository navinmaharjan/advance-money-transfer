import React from "react";

const TrackPayment = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto  py-4 sm:py-16">
          <div className="flex gap-5 sm:gap-10 px-4 sm:px-0 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 bg-offWhite p-5 shadow-xl overflow-y-scroll h-[350px]">
              <h3 className="text-xl sm:text-2xl font-light">
                Service <span className="text-brand">Charges</span>
              </h3>
              <div className="flex flex-col w-full gap-2 my-4">
                <div className="flex bg-white">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p className="font-medium">Country Name</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p className="font-medium">Account Credit</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p className="font-medium">Cash Pick Up</p>
                  </div>
                </div>

                <div className="flex bg-offWhite">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>United States of America</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>

                <div className="flex bg-white">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>Saudi Arabia</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>

                <div className="flex bg-offWhite">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>Qatar</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>

                <div className="flex bg-white">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>United Arab Emirates</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>

                <div className="flex bg-offWhite">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>Bahrain</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>

                <div className="flex bg-white">
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>India</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                  <div className="w-1/3 p-2 sm:text-base">
                    <p>--</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-1/2 bg-offWhite p-5 shadow-xl ">
              <h3 className="text-2xl font-light">
                Track Your <span className="text-brand">Payment</span>
              </h3>
              <div className="flex flex-col gap-2 sm:text-base py-4">
                <div className="w-full flex gap-2 items-center">
                  <p className="w-1/4"> Full Name </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-3/4 p-2"
                  />
                </div>
                <div className="w-full flex gap-2 items-center">
                  <p className="w-1/4"> RAD No: </p>
                  <input
                    type="text"
                    placeholder="RAD No."
                    className="w-3/4 p-2"
                  />
                </div>
                <div className="w-full flex gap-2 items-center">
                  <p className="w-1/4"> Contact No: </p>
                  <input
                    type="text"
                    placeholder="Contact No"
                    className="w-3/4 p-2"
                  />
                </div>
                <div className="w-full flex gap-2 items-center">
                  <p className="w-1/4"> Email Address: </p>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-3/4 p-2"
                  />
                </div>
                <div className="mt-6">
                  <button
                    to="/about-us"
                    className="text-brand border border-brand py-2 px-6 font-light rounded-lg tracking-wide hover:bg-brand hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Track
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackPayment;
