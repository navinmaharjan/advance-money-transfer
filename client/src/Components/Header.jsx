import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const determineActiveLink = () => {
      const path = location.pathname;
      if (path === "/") {
        return 0;
      } else if (path === "/about-us") {
        return 1;
      } else if (path === "/network") {
        return 2;
      } else if (path === "/services") {
        return 3;
      } else if (path === "/gallery") {
        return 4;
      } else if (path === "/contact-us") {
        return 5;
      }
    };
    setActiveLink(determineActiveLink());
  }, [location.pathname]);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <div className="sticky top-0 left-0 z-30 bg-offWhite shadow-md">
        <div className="container mx-auto flex justify-between items-center py-0 sm:py-1">
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
              <h1 className="font-roboto uppercase text-2xl font-semibold tracking-wider hidden sm:block ">
                Advance <span className="text-brand">Money</span> Transfer
              </h1>
            </div>
          </Link>

          {/* ---------Nav Area-------- */}
          <nav>
            <ul className=" gap-8 font-roboto tracking-wider hover:opacity-80 cursor-pointer hidden sm:flex">
              <Link to="/">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                  ${
                    activeLink === 0 ? "border-b-2 border-brand" : "border-none"
                  }`}
                  onClick={() => handleActiveLink(0)}
                >
                  Home
                </li>
              </Link>
              <Link to="/about-us">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                    ${
                      activeLink === 1
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(1)}
                >
                  About Us
                </li>
              </Link>
              <Link to="/network">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                    ${
                      activeLink === 2
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(2)}
                >
                  Network
                </li>
              </Link>
              <Link to="/services">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                    ${
                      activeLink === 3
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(3)}
                >
                  Services
                </li>
              </Link>
              <Link to="/gallery">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                    ${
                      activeLink === 4
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(4)}
                >
                  Gallery
                </li>
              </Link>
              <Link to="/contact-us">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-lg 
                    ${
                      activeLink === 5
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(5)}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
