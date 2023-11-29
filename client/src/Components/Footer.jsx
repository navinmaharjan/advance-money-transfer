import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full border-t-2 ">
      <div className="container mx-auto flex justify-between items-start py-24">
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
          <div className="flex gap-4 justify-center">
            <i className="fa-brands fa-facebook text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl text-brand hover:opacity-40 transition-colors duration-300 cursor-pointer"></i>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-center">
            Contact Us
          </h3>
          <div className="relative bg-brand p-1">
            <div className="absolute bg-white p-1 top-0 animate-contactAnimation"></div>
          </div>
          <div className="flex gap-4 items-center py-2">
            <div className="font-roboto tracking-wide">
              <h1 className="text-xl font-medium py-2">Israel</h1>
              <div className="text-slate-700 flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div>
                    <i className="fa-solid fa-location-dot text-brand"></i>
                  </div>
                  <div>
                    <p>Israel 8 Levinsky St. Tel- Aviv,</p>
                    <p>New Central Station, Str. No:4436</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <i className="fa-solid fa-phone text-brand"></i>
                  </div>
                  <div>
                    <p>972 3 6871372</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <i className="fa-solid fa-fax text-brand"></i>
                  </div>
                  <div>
                    <p>972 3 6871372</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-roboto tracking-wide">
              <h1 className="text-xl font-medium py-2">Nepal</h1>
              <div className="text-slate-700 flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div>
                    <i className="fa-solid fa-location-dot text-brand"></i>
                  </div>
                  <div>
                    <p>3rd Floor, Curchil Complex,</p>
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
                    <p>amt.remt@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-medium">
            Quick Links
          </h3>
          <div className="relative bg-brand p-1">
            <div className="absolute bg-white p-1 top-0 animate-quickLinkAnimation "></div>
          </div>
          <ul className="pt-4 flex flex-col gap-2">
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
          <h3 className="text-xl font-medium">
            Useful Links
          </h3>
          <div className="relative bg-brand p-1">
            <div className="absolute bg-white p-1 top-0 animate-usefulLinkAnimation"></div>
          </div>
          <ul className="pt-4 flex flex-col gap-2">
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

      <div className="bg-offWhite text-center">
        <p className=" text-xs text-slate-900 py-2">
          © 2008 - 2023 Advance Money Transfer. All rights reserved | Powered by
          Radiant Info Tech
        </p>
      </div>
    </div>
  );
};

export default Footer;
