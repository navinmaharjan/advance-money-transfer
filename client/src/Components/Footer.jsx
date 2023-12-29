import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full border-t-2 ">
      <div className="container mx-auto flex flex-col justify-between items-start py-2 xl:flex-row xl:py-24">
        <div className="flex flex-col w-[365px] justify-center items-center gap-2">
          <div className="relative w-32 h-32">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>

          <div className="w-3/4 text-center">
            <h3 className=" font-extralight tracking-wide">
              Relief ... Once You Remit ... Satisfaction Once Your Recieve
            </h3>
          </div>
          <div className="flex gap-4 justify-center pb-4 sm:pb-0">
            <i className="fa-brands fa-facebook text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
          </div>
        </div>

        <div className="flex gap-10 flex-col md:flex-row xl:flex-row">
          <div>
            <h3 className="text-xl font-medium text-start px-8 sm:px-0">
              Contact Us
            </h3>
            <div className="relative bg-brand p-1 hidden sm:block">
              <div className="absolute bg-white p-1 top-0 animate-contactAnimation hidden sm:block"></div>
            </div>
            <div className="flex flex-col gap-4 items-center py-2 px-8 sm:flex-row sm:px-0">
              <div className="font-roboto tracking-wide">
                {/* <h1 className="text-xl font-medium py-2">Nepal</h1> */}
                <div className="text-slate-700 flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <div>
                      <i className="fa-solid fa-location-dot text-brand"></i>
                    </div>
                    <div>
                      <p>3rd Floor, Churchil Complex,</p>
                      <p>China Town, Sundhara, Kathmandu</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div>
                      <i className="fa-solid fa-phone text-brand"></i>
                    </div>
                    <div>
                      <a href="tel:">+977-01-5355288</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div>
                      <i className="fa-solid fa-envelope text-brand"></i>
                    </div>
                    <div>
                      <a href="mailto:">cs@amtremit.com.np</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 sm:py-0">
            <h3 className="text-xl font-medium px-8 sm:px-0">Quick Links</h3>
            <div className="relative bg-brand p-1 hidden sm:block">
              <div className="absolute bg-white p-1 top-0 animate-quickLinkAnimation hidden sm:block "></div>
            </div>
            <ul className="pt-4 flex flex-col gap-2 px-8 sm:px-0">
              <Link to="/about-us">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Corporate Profile
                </li>
              </Link>

              <Link to="/ourteam">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Our Team
                </li>
              </Link>

              <Link to="/vision-mission-commitment">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Mission Vision & Commitment
                </li>
              </Link>

              <Link to="/why-choose-us">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Why Choose Us
                </li>
              </Link>

              <Link to="/affiliate-company">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Affiliate Company
                </li>
              </Link>

              <Link to="/anti-money-laundering">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Anti Money Laundering
                </li>
              </Link>
            </ul>
          </div>

          <div className="font-roboto">
            <h3 className="text-xl font-medium px-8 sm:px-0">Useful Links</h3>
            <div className="relative bg-brand p-1 hidden sm:block">
              <div className="absolute bg-white p-1 top-0 animate-usefulLinkAnimation hidden sm:block"></div>
            </div>
            <ul className="pt-4 flex flex-col gap-2 px-8 sm:px-0">
              <Link to="/FAQs">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Frequently Asked Questions
                </li>
              </Link>

              <Link to="/contact-us">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Contact Support
                </li>
              </Link>

              <Link to="/gallery">
                <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
                  <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
                  Galleries
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-offWhite text-center px-4 sm:px-0">
        <p className=" text-xs text-slate-900 py-2">
          © 2008 - 2023 Advance Money Transfer. All rights reserved | Powered by
          <a
            href="https://radiantnepal.com/"
            target="_blank"
            className="text-brand"
          >
            Radiant Info Tech
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
