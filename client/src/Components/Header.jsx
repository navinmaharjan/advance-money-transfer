import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const [nav, setNav] = useState(true);
  // const [dropdown, setDropdown] = useState(false)
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
    return nav
      ? "animate-menuTransformAnimation2"
      : "animate-menuTransformAnimation";
  };

  const dropdownAnimation = () => {
    return nav ? "animate-dropdown" : "animate-dropdown2";
  };
  return (
    <>
      <div className={`sticky top-0 left-0 z-30 bg-white shadow-md`}>
        <div className="container mx-auto flex justify-between items-center py-0">
          {/* ---------Logo-------- */}
          <Link to="/">
            <div className="flex sm:gap-4  items-center">
              <div className="relative sm:w-14 sm:h-14 w-14 h-14">
                <img
                  src={Logo}
                  alt="logo"
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <h1 className="font-roboto uppercase sm:text-lg font-semibold tracking-wider pl-4 sm:pl-0">
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
              {/* -------- mobile menu only --------- */}
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
              className={`gap-6 tracking-wider cursor-pointer sm:flex flex-col sm:flex-row  mr-6 sm:mr-0 hidden`}
            >
              <Link to="/">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4 
                  ${activeLink === 0 ? "text-brand" : "text-slate-700"}`}
                  onClick={() => handleActiveLink(0)}
                >
                  Home
                </li>
              </Link>

              <li
                className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm flex items-center gap-1 py-4 relative
                    ${activeLink === 1 ? "text-brand" : "text-slate-700"}`}
                onClick={() => handleActiveLink(1)}
                onMouseEnter={() => setAboutUs(true)}
                onMouseLeave={() => setAboutUs(false)}
              >
                About Company
                {aboutUs && (
                  <div
                    className={`bg-white absolute top-[52px] left-0 w-[200px] ${dropdownAnimation()}`}
                  >
                    <ul className={`shadow-xl`}>
                      <Link to="/about-us">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          About Us
                        </li>
                      </Link>
                      <Link to="/company-profile">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Corporate Profile
                        </li>
                      </Link>
                      <Link to="/ourteam">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Our Team
                        </li>
                      </Link>
                      <Link to="/managment">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Managment
                        </li>
                      </Link>
                      <Link to="/product-services">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Our Product & Services
                        </li>
                      </Link>
                      <Link to="/our-network">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Our Network
                        </li>
                      </Link>
                      <Link to="/affiliate-company">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Affiliate Company
                        </li>
                      </Link>
                      <Link to="/anti-money-laundering">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Anti Money Laundering
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>

              <Link to="/network">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4 
                    ${activeLink === 2 ? "text-brand" : "text-slate-700"}`}
                  onClick={() => handleActiveLink(2)}
                >
                  Network
                </li>
              </Link>
              <Link to="/services">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4 
                    ${activeLink === 3 ? "text-brand" : "text-slate-700"}`}
                  onClick={() => handleActiveLink(3)}
                >
                  Services
                </li>
              </Link>
              <Link to="/gallery">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4
                    ${activeLink === 4 ? "text-brand" : "text-slate-700"}`}
                  onClick={() => handleActiveLink(4)}
                >
                  Gallery
                </li>
              </Link>
              <Link to="/contact-us">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4
                    ${activeLink === 5 ? "text-brand" : "text-slate-700"}`}
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
                <i className="fa-solid fa-xmark text-xl text-brand"></i>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
