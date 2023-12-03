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
            Our Network
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="w-1/2 container mx-auto text-xl text-slate-700  py-4 sm:py-48">
          <p>
          We have strategic confederation with leading remittance companies in the world, such as  Hong Kong, and Israel. We have established international network offices in Hong Kong, Korea and UK. In addition, we have authorized agents scattered around the world- in the USA, Japan, Malaysia, Germany, China, Australia etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;