import Banner from "../../assets/bannerImages/bannerImage-3.jpg";

const CompanyProfile = () => {
  22;
  return (
    <>
      <div className="relative w-full h-20 sm:h-40">
        {/* <div className="absolute w-full h-60 bg-black opacity-50 z-10"></div> */}
        <img
          src={Banner}
          alt="banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h3 className="text-2xl sm:text-2xl text-white font-semibold tracking-wide">
            Affiliate Company
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="sm:w-1/2 container mx-auto text-base text-slate-700  py-4 sm:py-20 px-4 sm:px-0">
          <p>
            <span className="font-semibold">
              Union International Tours & Travels P Ltd{" "}
            </span>
            Established in 1999, Union International Tours & Travels P Ltd, a
            leading travel agency. It has got IATA Accreditation. It is the
            authorized agent for Nepal Airlines Corporation, Qatar Airways,
            Etihad Air, Thai Air,China Southern Airlines, Air India,Cathe
            Pacific, Delta Air, Himalayan Air, MalaysianAir,Budha Air, Yeti Air
            and other 1st class international and domestic Airlines. It has been
            serving as dominant travel agency in the air ticketing sector.
          </p>

          <p className="pt-4">
            <span className="font-semibold">
              Union Housing and Real Estate P Ltd.
            </span>{" "}
            Established in 2005, Union Housing and Real Estate P Ltd has the
            higher market share in Real Estate industry.
          </p>

          <p className="pt-4">
            <span className="font-semibold">Kumari Bank Limited</span>{" "}
            Established in 2001, Kumari Bank Limited is the "A" class commercial
            bank in Nepal licensed by Nepal Rastra Bank. KBLwas founded an
            objective of providing competitive modern banking services in the
            Nepalese financial market.
          </p>

          <p className="pt-4">
            <span className="font-semibold">Manang Air Pvt. Ltd</span>{" "}
            Established in 1997, Manang Air Pvt. Ltd is the leading provider of
            helicopter services to the public and private sector in Nepal. This
            has obtained the certification for commercial helicopter under the
            regulation of Civil Aviation Authority of Nepal
          </p>
          <p className="pt-4">
            <span className="font-semibold">Agatuk Resort</span> is newly
            renovated 4 star deluxe resorts, which is situated in banepa, kavre.
          </p>

          <p className="pt-4">
            <span className="font-semibold">
              Hotel Thamel & Sweet Ramada Encore
            </span>{" "}
            is located at Thamel, Kathmandu. This is first Wyndham Certified
            property in Nepal is an innovative hospitality company with a view
            to providing worldclass hotel facilities in an unique environment
            that exceeds expectations in terms of intuitive service and
            luxurious ambiance.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
