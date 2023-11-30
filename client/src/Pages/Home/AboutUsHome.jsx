import { Link } from "react-router-dom";

const AboutUsHome = () => {
  return (
    <>
      <div
        className="container mx-auto py-4  sm:py-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2500"
      >
        <div className="flex flex-col items-center">
          {/* ---------- heading --------- */}
          <h1 className=" text-2xl sm:text-4xl pb-2 sm:pb-8 font-light">
            About <span className="text-brand">Us</span>
          </h1>

          {/* -------- paragraph --------- */}
          <div className="text-center flex flex-row justify-center">
            <p className="text-roboto text-slate-900 sm:text-2xl w-3/4 tracking-normal font-extralight">
              {" "}
              Established in April 2005 Advance Money Transfer [AMT] has
              pioneered Nepalese Remittance industry near over two decades.
              Licensed by Central Bank of Nepal (Nepal Rastra Bank) under
              Nepalese Community Act 1996 to conduct money transfer services in
              Nepal, the company has been serving Nepalese community from
              various parts of the world by allowing safe, convenient, speedy
              and economical way of remitting funds to Nepal.{" "}
            </p>
          </div>

          {/* -------- button --------- */}
          <Link
            to="/about-us"
            className="text-brand border border-brand p-2 sm:p-3 font-light rounded-lg  mt-4 sm:mt-8"
          >
            More About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUsHome;
