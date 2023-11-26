import Logo from "../../public/logo/logo.png";

const Header = () => {
  return (
    <>
        {/* <div className="bg-black w-full p-3"> */}

        {/* </div> */}
      <div className="container mx-auto flex justify-between items-center">
        {/* ---------Logo-------- */}
        <div className="flex gap-4  items-center">
          <div className="relative w-16 h-16 ">
            <img
              src={Logo}
              alt="logo"
              className="absolute w-full h-full object-contain"
            />
          </div>
          <h1 className="font-roboto uppercase text-2xl font-semibold tracking-wider">Advance <span className="text-brand">Money</span> Transfer</h1>
        </div>

        {/* ---------Nav Area-------- */}
        <nav>
          <ul className="flex gap-8 font-roboto tracking-wider hover:opacity-80 cursor-pointer">
            <li className="hover:text-brand transition-colors duration-300">
              Home
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              About Us
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              Network
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              Services
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              Gallery
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              Network
            </li>
            <li className="hover:text-brand transition-colors duration-300">
              Exchange
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
