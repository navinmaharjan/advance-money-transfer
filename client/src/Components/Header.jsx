import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [aboutUs, setAboutUs] = useState(false);
  const [aboutCompany, setAboutCompany] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const [nav, setNav] = useState(false);
  // const [dropdown, setDropdown] = useState(false)
  useEffect(() => {
    const determineActiveLink = () => {
      const path = location.pathname;
      if (path === "/") {
        return 0;
      } else if (
        path === "/about-us" ||
        path === "/ourteam" ||
        path === "/vision-mission-commitment" ||
        path === "/why-choose-us" ||
        path === "/affiliate-company" ||
        path === "/anti-money-laundering"
      ) {
        return 1;
      } else if (path === "/our-network") {
        return 2;
      } else if (path === "/services") {
        return 3;
      } else if (path === "/gallery") {
        return 4;
      } else if (path === "/contact-us") {
        return 5;
      } else if (path === "/notice") {
        return 6;
      }
    };
    setActiveLink(determineActiveLink());
  }, [location.pathname]);

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleMobileNav = () => {
    setAboutCompany(!aboutCompany);
  };
  const dropdownAnimation = () => {
    return nav ? "animate-dropdown2" : "animate-dropdown";
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
          <nav className={`${nav ? `flex justify-center` : `flex-none`}`}>
            {/* {!nav && ( */}
            <div
              className={`fixed top-0 lg:hidden w-[280px] transition-all duration-300 ${
                !nav ? `-left-[280px]` : `left-0`
              }`}
            >
              {/* -------- mobile menu only --------- */}
              <ul className="flex flex-col text-white bg-black h-screen pt-20 pl-8 gap-6 uppercase tracking-widest">
                <Link to="/" onClick={handleNav}>
                  <li> Home </li>
                </Link>
                <Link>
                  <li onClick={handleMobileNav}> About Us </li>
                  {aboutCompany && (
                    <div className=" w-[220px] top-10 left-0 bg-offWhite">
                      <ul className={`shadow-xl`}>
                        <Link to="/about-us" onClick={handleNav}>
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Introduction
                          </li>
                        </Link>

                        <Link to="/ourteam" onClick={handleNav}>
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Our Team
                          </li>
                        </Link>
                        <Link
                          to="/vision-mission-commitment"
                          onClick={handleNav}
                        >
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Mission Vision & Commitment
                          </li>
                        </Link>
                        <Link to="/why-choose-us" onClick={handleNav}>
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Why Choose Us
                          </li>
                        </Link>

                        <Link to="/affiliate-company" onClick={handleNav}>
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Affiliate Company
                          </li>
                        </Link>
                        <Link to="/anti-money-laundering" onClick={handleNav}>
                          <li
                            className="py-2 px-4 text-slate-700 hover:bg-offWhite"
                            onClick={handleMobileNav}
                          >
                            Anti Money Laundering
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </Link>
                <Link to="/our-network" onClick={handleNav}>
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
                <Link to="/notice" onClick={handleNav}>
                  <li> Notice </li>
                </Link>
              </ul>
            </div>
            {/* )} */}

            <ul
              className={`gap-6 tracking-wider cursor-pointer sm:flex flex-col sm:flex-row  mr-6 sm:mr-0 hidden md:hidden lg:flex`}
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
                About Us
                {aboutUs && (
                  <div
                    className={`bg-white absolute top-[52px] left-0 w-[250px] ${dropdownAnimation()}`}
                  >
                    <ul className={`shadow-xl`}>
                      <Link to="/about-us">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Introduction
                        </li>
                      </Link>
                      <Link to="/ourteam">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Our Team
                        </li>
                      </Link>
                      <Link to="/vision-mission-commitment">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Mission Vision & Commitment
                        </li>
                      </Link>
                      <Link to="/why-choose-us">
                        <li className="py-2 px-4 text-slate-700 hover:bg-offWhite">
                          Why Choose Us
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

              <Link to="/our-network">
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
              <Link to="/notice">
                <li
                  className={`hover:text-brand transition-colors duration-300 text-base sm:text-sm py-4
                    ${activeLink === 6 ? "text-brand" : "text-slate-700"}`}
                  onClick={() => handleActiveLink(5)}
                >
                  Notice
                </li>
              </Link>
            </ul>

            <div
              onClick={handleNav}
              className="sm:hidden px-4 flex gap-2  m-4 drop-shadow-xl md:block lg:hidden"
            >
              {nav ? (
                <i className="fa-solid fa-xmark text-xl text-brand"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl text-brand"></i>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
