import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="w-full border-t-2 ">
      <div className="container mx-auto flex justify-between items-start py-24">
        <div className="relative w-32 h-32">
          <img
            src={Logo}
            alt="logo"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-xl font-medium border-b-2 border-brand">Contact Us</h3>
          <div className="flex gap-4 items-center py-2">
            <div className="font-roboto tracking-wide">
              <h1 className="text-xl text-brand font-semibold">Israel</h1>
              <div className="text-slate-700">
                <p>Israel 8 Levinsky St. Tel- Aviv,</p>
                <p>New Central Station, Str. No:4436</p>
                <p>Tel: 972 3 6871372</p>
                <p>Fax: 972 3 6871315</p>
              </div>
            </div>
            <div className="font-roboto tracking-wide">
              <h1 className="text-xl text-brand font-semibold">Nepal</h1>
              <div className="text-slate-700">
                <p>3rd Floor, Curchil Complex,</p>
                <p>China Town, Sundhara, Kathmandu</p>
                <p>Tel: +977 01 5355288</p>
                <p>E-mail: amt.remt@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-medium border-b-2 border-brand">Quick Links</h3>
          <ul className="py-2">
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Company Profile
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Affiliated Company
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Anti Money Laundering
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Managment
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Branch Network
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Our Services
            </li>
          </ul>
        </div>

        <div className="font-roboto">
          <h3 className="text-xl font-medium border-b-2 border-brand">Useful Links</h3>
          <ul className="py-2">
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Frequently Asked Questions
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Contact Support
            </li>
            <li className="text-slate-700 hover:text-brand transition-colors duration-300 cursor-pointer tracking-wide">
              Galleries
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-offWhite text-center">
        <p className=" text-xs text-slate-900 py-2">© 2008 - 2023 Advance Money Transfer. All rights reserved | Powered by Radiant Info Tech</p>
      </div>
    </div>
  );
};

export default Footer;
