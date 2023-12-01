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
            Managment
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="w-1/2 container mx-auto text-xl text-slate-700  py-4 sm:py-48">
          <p>
            The AMT is leaded by chairman <span className="font-semibold">Mr Krishna Prasad Gyawali</span>, a young and
            successful professional. He is the M D of Union International Tours
            and Travel Pvt Ltd, Union Real Estate Pvt. Ltd. He is also a
            director of Kumari Bank Limited, Agantuk Resort, Manang Air Pvt.
            Ltd, Thamel Hotel and Sweet (Ramada Incore). Mr. Gyawali's envision
            brings a very successful track record in all his ventures. His
            management style is innovative to run the organization with best
            corporate culture. General Manager Krishna Prasad Gnawali holding
            MBA with several years of experience in the management sector
            supporting chairman as key person in the company.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
