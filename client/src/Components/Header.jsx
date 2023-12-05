import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const [nav, setNav] = useState(true);
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

  const handleNav = () => {
    setNav(!nav);
  };

  const determineAnimationClass = () => {
    return nav ? 'animate-menuTransformAnimation2' : 'animate-menuTransformAnimation';
  };

  return (
    <>
      <div className={`sticky top-0 left-0 z-30 bg-white shadow-md`}>
        <div className="container mx-auto flex justify-between items-center py-0 sm:py-1">
          {/* ---------Logo-------- */}
          <Link to="/">
            <div className="flex sm:gap-4  items-center">
              <div className="relative sm:w-16 sm:h-16 w-14 h-14">
                <img
                  src={Logo}
                  alt="logo"
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <h1 className="font-roboto uppercase sm:text-2xl font-semibold tracking-wider pl-4 sm:pl-0">
                Advance <span className="text-brand">Money</span> Transfer
              </h1>
            </div>
          </Link>

          {/* ---------Nav Area-------- */}
          <nav className={`${!nav ? `flex justify-center` : `flex-none`}`}>
            {/* {!nav && ( */}
              <div
                className={`h-screen  fixed left-0 sm:hidden w-[200px] ${determineAnimationClass()} `}
              >
              
                <ul className="flex flex-col text-white bg-black h-screen  pt-20 pl-8 gap-6 uppercase tracking-widest">
                {/* <i className="fa-solid fa-xmark text-xl text-brand" onClick={handleClose}></i> */}
                  <Link to="/" onClick={handleNav}>
                    <li> Home </li>
                  </Link>
                  <Link to="/about-us" onClick={handleNav}>
                    <li> About Us </li>
                  </Link>
                  <Link to="/network" onClick={handleNav}>
                    <li> Network </li>
                  </Link>
                  <Link to="/services" onClick={handleNav}>
                    <li> Services </li>
                  </Link>
                  <Link to="/gallery" onClick={handleNav}>
                    <li> Gallery </li>
                  </Link>
                  <Link to="/contact-us" onClick={handleNav}>
                    <li> Contact Us </li>
                  </Link>
                </ul>
              </div>
            {/* )} */}

            <ul
              className={`gap-8 tracking-wider hover:opacity-80 cursor-pointer sm:flex p-8 flex-col sm:flex-row  sm:pt-8  sm:h-20 mr-6 sm:mr-0 hidden`}
            >
              <Link to="/">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
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
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
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
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
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
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
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
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
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
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-lg 
                    ${
                      !nav && activeLink === 5
                        ? "border-b-2 border-brand"
                        : "border-none"
                    }`}
                  onClick={() => handleActiveLink(5)}
                >
                  Contact Us
                </li>
              </Link>
            </ul>

            <div
              onClick={handleNav}
              className="sm:hidden px-4 flex gap-2  m-4 drop-shadow-xl"
            >
            
              {nav ? (
                <i className="fa-solid fa-bars text-xl text-brand"></i>
              ) : (
                <i className="fa-solid fa-xmark text-xl text-brand" ></i>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
