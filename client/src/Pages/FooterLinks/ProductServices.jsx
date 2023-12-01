import Banner from "../../assets/bannerImages/bannerImage-3.jpg";

const CompanyProfile = () => {
  22;
  return (
    <>
      <div className="relative w-full h-20 sm:h-60">
        {/* <div className="absolute w-full h-60 bg-black opacity-50 z-10"></div> */}
        <img
          src={Banner}
          alt="banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h3 className="text-2xl sm:text-4xl text-white font-semibold tracking-wide">
            Product & Services
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="w-1/2 container mx-auto text-xl text-slate-700  py-4 sm:py-48">
          <p>
            AMT Remit is an online money transfer product developed by the
            company to facilitate money transfer to Nepal with the uses of
            state-of – art technology for secured money transfer. We provide all
            our valued customers a very much quick, secure, reliable and
            convenient money transfer services. We deliver quality services with
            minimum service charges comparing to other remittance companies. To
            fulfill the requirement of the Nepalese migrants, AMT provides the
            following services:
          </p>
          <h1 className="text-2xl font-semibold pt-4">Instant Cash Payment </h1>
          <p className="">Money transferred from anywhere in the world can be instantly cashed in each corner with in the country with the partnership of  <span className="font-semibold">‘NIC Asia Remit’</span>.  With the use of advance technology and our extensive network coverage, AMT provide a secure way to send and receive money. We make sure that the remittance gets to where it's needed quickly and without any complication.</p>

          <h1 className="text-2xl font-semibold pt-4">Account Credit </h1>
          <p className="">We can instantly deposit money transferred from any corner of the world to remitters' bank account in Nepal. For this service we have corresponding relations with almost all Nepalese banks and financial institutions. </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
