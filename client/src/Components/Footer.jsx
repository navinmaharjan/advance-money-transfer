import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full border-t-2 ">
      <div className="container mx-auto flex flex-col justify-between items-start py-2 sm:flex-row sm:py-24">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-32 h-32">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>

          <div className="w-3/4 text-center">
            <h3 className=" font-extralight tracking-wide">
              Your safe, easy and reliable money transfer partner
            </h3>
          </div>
          <div className="flex gap-4 justify-center pb-4 sm:pb-0">
            <i className="fa-brands fa-facebook text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
          </div>
        </div>

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
                    <p>+977 01 5355288</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <i className="fa-solid fa-envelope text-brand"></i>
                  </div>
                  <div>
                    <p>cs@amt.remit.com</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="py-4 sm:py-0">
          <h3 className="text-xl font-medium px-8 sm:px-0">
            Quick Links
          </h3>
          <div className="relative bg-brand p-1 hidden sm:block">
            <div className="absolute bg-white p-1 top-0 animate-quickLinkAnimation hidden sm:block "></div>
          </div>
          <ul className="pt-4 flex flex-col gap-2 px-8 sm:px-0">
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Company Profile
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Affiliated Company
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Anti Money Laundering
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Managment
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Branch Network
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Our Services
            </li>
          </ul>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-medium px-8 sm:px-0">
            Useful Links
          </h3>
          <div className="relative bg-brand p-1 hidden sm:block">
            <div className="absolute bg-white p-1 top-0 animate-usefulLinkAnimation hidden sm:block"></div>
          </div>
          <ul className="pt-4 flex flex-col gap-2 px-8 sm:px-0">
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Frequently Asked Questions
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Contact Support
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
            <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;
              Galleries
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-offWhite text-center px-4 sm:px-0">
        <p className=" text-xs text-slate-900 py-2">
          © 2008 - 2023 Advance Money Transfer. All rights reserved | Powered by
          <span className="text-brand"> Radiant Info Tech</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
