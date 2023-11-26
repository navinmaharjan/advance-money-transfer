import Logo from "../../public/logo/logo.png";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* ---------Logo-------- */}
        <div className="relative w-40 h-16 ">
          <img
            src={Logo}
            alt="logo"
            className="absolute w-full h-full object-contain"
          />
        </div>

        {/* ---------Nav Area-------- */}
        <nav>
            <ul className="flex gap-8 font-roboto tracking-wider hover:opacity-80 cursor-pointer">
                <li className="hover:text-brand transition-colors duration-300">Home</li>
                <li className="hover:text-brand transition-colors duration-300">About Us</li>
                <li className="hover:text-brand transition-colors duration-300">Network</li>
                <li className="hover:text-brand transition-colors duration-300">Services</li>
                <li className="hover:text-brand transition-colors duration-300">Gallery</li>
                <li className="hover:text-brand transition-colors duration-300">Network</li>
                <li className="hover:text-brand transition-colors duration-300">Exchange</li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
