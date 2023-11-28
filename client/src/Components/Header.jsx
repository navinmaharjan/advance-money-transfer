import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 left-0 z-30 bg-offWhite shadow-md">
        <div className="container mx-auto flex justify-between items-center py-1">
          {/* ---------Logo-------- */}
          <Link to="/">
            <div className="flex gap-4  items-center">
              <div className="relative w-16 h-16 ">
                <img
                  src={Logo}
                  alt="logo"
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <h1 className="font-roboto uppercase text-2xl font-semibold tracking-wider">
                Advance <span className="text-brand">Money</span> Transfer
              </h1>
            </div>
          </Link>

          {/* ---------Nav Area-------- */}
          <nav>
            <ul className="flex gap-8 font-roboto tracking-wider hover:opacity-80 cursor-pointer">
              <Link to="/">
                <li className="hover:text-brand transition-colors duration-300 border-b-2 border-brand pb-1">
                  Home
                </li>
              </Link>

              <Link to="/about-us">
                <li className="hover:text-brand transition-colors duration-300">
                  About Us
                </li>
              </Link>
              <Link to="/network">
                <li className="hover:text-brand transition-colors duration-300">
                  Network
                </li>
              </Link>
              <Link to="/services">
                <li className="hover:text-brand transition-colors duration-300">
                  Services
                </li>
              </Link>
              <Link to="/gallery">
                <li className="hover:text-brand transition-colors duration-300">
                  Gallery
                </li>
              </Link>

              <li className="hover:text-brand transition-colors duration-300">
                Contact Us
              </li>
              <li className="hover:text-brand transition-colors duration-300">
                Exchange
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
