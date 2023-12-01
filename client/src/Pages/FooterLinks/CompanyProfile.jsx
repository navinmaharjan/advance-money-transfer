import Banner from "../../assets/bannerImages/bannerImage-3.jpg";

const CompanyProfile = () => {22
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
            Corporate Profile
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="w-1/2 container mx-auto text-xl text-slate-700  py-4 sm:py-16">
          <p className="pb-2">
            <span className="text-xl font-semibold">
              Advance Money Transfer Pvt. Ltd.
            </span>{" "}
            is a money transfer company established in April 2005 under Nepalese
            Company Act 1996. The company has been serving Nepalese community in
            different parts of the world by providing a safe, convenient, speedy
            and economical way of remitting money to Nepal.{" "}
          </p>

          <p className="pb-2">
            The company aims to capture the significant share of the huge annual
            inward remittance by Nepalese migrants around the worlds. AMT
            aspires to revolutionize the remittance industry by employing state
            of art IT Technology.
          </p>

          <p className="pb-2">
            We have strategic alliances with different companies in aboard to
            serve the delivery of remittances in Nepal.
          </p>

          <p className="pb-2">
            AMT remit is an excellent product successfully providing instant
            cash payment and account credit services to Nepalese Diaspora
            remitting money to their family and relatives in Nepal.
          </p>

          <p className="pb-2">
            We have been able to extend this unique service to our valued
            clients covering the entire regions in Nepal.
          </p>

          <h1 className="text-xl font-semibold mt-6">AMT Group </h1>

          <p className="pb-2">
            Nepal's leading service sector company, the group is amongst Nepal's
            leading corporation. It is anchored by highly qualitative and
            professionals.
          </p>

          <p>
            Over the years AMT Group has emerged as a major company with a
            dominant presence in remittance, banking, real estate, aviation,
            hospitality, travel agency and media etc. Advance Money Transfer Pvt
            Ltd is a wholly owned venture of AMT Group with crystal clear vision
            and formidable presence in remittance business.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
