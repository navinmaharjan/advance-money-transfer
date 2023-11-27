import React from "react";

const AboutUsHome = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center">
          
          {/* ---------- heading --------- */}
          <h1 className="text-4xl pb-8 font-light">
            About <span className="text-brand">Us</span>
          </h1>

          {/* -------- paragraph --------- */}
          <div className="text-center flex flex-row justify-center">
            <p className="text-roboto text-slate-700 text-2xl w-3/4 tracking-normal font-extralight">
              {" "}
              Advance Money Transfer P Ltd is a money transfer company
              established in April 2005 under Nepalese Company Act 1996. The
              company has been serving Nepalese community in different parts of
              the world by providing a safe, convenient, speedy and economical
              way of remitting money to Nepal. The company aims to capture the
              significant share of the huge annual inward remittance by Nepalese
              migrants around the worlds. AMT aspires to revolutionize the
              remittance industry by employing state of art IT Technology. The
              company has extensive networks of over 150 branches in Nepal and
              overseas partners, correspondents in Hong Kong, Israel, Korea,
              United Kingdom, Malaysia, Australia, USA, UAE, Kuwait, Qatar,
              Bahrain, and other parts of the world.{" "}
            </p>
          </div>

          {/* -------- button --------- */}
          <button className="text-brand border border-brand p-3 font-light rounded-lg mt-8">More About Us</button>


        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
