import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import TeamMember from "./TeamMember";

const AboutUs = () => {
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
            Corporate Profile
          </h3>
        </div>
      </div>
      <div
        className="container mx-auto py-4 sm:py-8"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        <div className="text-start">
          {/* <h3 className="text-4xl font-medium font-roboto tracking-wide">
            We understand your unique needs !
          </h3> */}
          {/* <p className="font-roboto text-slate-900 sm:text-base tracking-normal font-light py-4 sm:mx-60 px-4 sm:px-0">
            Established in April 2005 Advance Money Transfer [AMT] has pioneered
            Nepalese Remittance industry near over two decades. Licensed by
            Central Bank of Nepal (Nepal Rastra Bank) under Nepalese Community
            Act 1996 to conduct money transfer services in Nepal, the company
            has been serving Nepalese community from various parts of the world
            by allowing safe, convenient, speedy and economical way of remitting
            funds to Nepal.
          </p>

          <p className="font-roboto text-slate-900 sm:text-base tracking-normal font-light py-4 sm:mx-60 px-4 sm:px-0">
            We specialize for small- to medium- sized{" "}
            <span className="font-semibold">Money Transfers</span> destined for
            Nepalese <span className="font-semibold">Bank Accounts</span>{" "}
            including <span className="font-semibold">Cash Pick Up's</span> as
            its pricing is usually the most competitive for these transfers.
            Transfers made through AMT are secure, fast and easy. The platform
            has as excellent reputation which supports a wide range of countries
            and currencies, and international transfers can be made using debit
            and credit cards, making it a convenient option for users.
          </p>

          <p className="font-roboto text-slate-900 sm:text-base tracking-normal font-light py-4 sm:mx-60 px-4 sm:px-0">
            We have strategic alliances with Galaxy Network Limited, ARY Speed
            Remit, Instant Cash, to serve prime worldwide in the delivery of
            remittances in Nepal. AMT aspires to revolutionize the remittance
            industry by employing state of art IT Technology.
          </p> */}

          <div>
            {/* ----- From Corporate Profile ------- */}
            <div className=" container mx-auto text-base text-slate-700  py-4 sm:py-8 px-4 sm:px-0 font-light">
              <p className="pb-2 sm:mx-60">
                <span className="text-lg font-semibold">
                  Advance Money Transfer Pvt. Ltd.
                </span>{" "}
                is a money transfer company established in April 2005 under
                Nepalese Company Act 1996. The company has been serving Nepalese
                community in different parts of the world by providing a safe,
                convenient, speedy and economical way of remitting money to
                Nepal.{" "}
              </p>

              <p className="pb-2 sm:mx-60">
                The company aims to capture the significant share of the huge
                annual inward remittance by Nepalese migrants around the worlds.
                AMT aspires to revolutionize the remittance industry by
                employing state of art IT Technology.
              </p>

              <p className="pb-2 sm:mx-60">
                We have strategic alliances with different companies in aboard
                to serve the delivery of remittances in Nepal.
              </p>

              <p className="pb-2 sm:mx-60">
                AMT remit is an excellent product successfully providing instant
                cash payment and account credit services to Nepalese Diaspora
                remitting money to their family and relatives in Nepal.
              </p>

              <p className="pb-2 sm:mx-60">
                We have been able to extend this unique service to our valued
                clients covering the entire regions in Nepal.
              </p>

              <h1 className="text-lg font-semibold mt-6 sm:mx-60">AMT Group </h1>

              <p className="pb-2 sm:mx-60">
                Nepal's leading service sector company, the group is amongst
                Nepal's leading corporation. It is anchored by highly
                qualitative and professionals.
              </p>

              <p className="sm:mx-60">
                Over the years AMT Group has emerged as a major company with a
                dominant presence in remittance, banking, real estate, aviation,
                hospitality, travel agency and media etc. Advance Money Transfer
                Pvt Ltd is a wholly owned venture of AMT Group with crystal
                clear vision and formidable presence in remittance business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-offWhite">
        <div className="container mx-auto py-4 sm:py-14">
          <div className="flex gap-8 flex-col sm:flex-row px-4 sm:px-0">
            <div
              className="sm:w-1/2"
              data-aos="zoom-in-right"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <h3 className="text-2xl sm:text-2xl font-medium font-roboto tracking-wide pb-2 text-center">
                Our <span className="text-brand">Features</span>
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 sm:h-[440px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">
                        Instant Cash Pick Up's:{" "}
                      </span>
                      Real time cash payment to beneficiary in Nepal by any of
                      5000 payment locations with in Nepal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">
                        Instant Bank Transfers:{" "}
                      </span>
                      Real-time crediting to any bank accounts in Nepal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Robust Security </span>
                      Ensures a secure and reliable remittance
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      4
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">
                        Speed & Affordability{" "}
                      </span>
                      Fast and convenient transactions with minimal charges
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      5
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Compliance Assured </span>
                      AML and KYC compliant features, with risk assessment and
                      transactions monitoring
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center sm:text-lg">
                      6
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Helpdesk Support </span>
                      Team of dedicated Helpdesk officials for assistance in
                      case of international or domestic payment issues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="sm:w-1/2"
              data-aos="zoom-in-left"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <h3 className="text-2xl sm:text-2xl font-medium font-roboto tracking-wide pb-2 text-center sm:text-left mx-10 sm:mx-0">
                Best ways to <span className="text-brand">send money</span> from
                us
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 sm:h-[440px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center sm:text-lg">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Direct Debit - </span>
                      Direct Debit is a convenient option that lets us take
                      money from your account once you have authorised the
                      payment on our remitting correspondent's site
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center sm:text-lg">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Debit Card - </span>Paying
                      for your transfer with a debit card is easy and fast
                      without being physically present in the service loaction.
                      This transfer depends upon your banks services and
                      policies, however if allowed / approved in remitting end,
                      we are good for payment in Nepal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center sm:text-lg">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Credit Card - </span>
                      Paying for your transfer with a credit card is easy and
                      fast. We accept all kinds of international cards however
                      it depends upon acceptance / approval from the respective
                      remitting company / respective country policy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center sm:text-lg">
                      4
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light sm:text-base">
                      <span className="font-semibold">Bank Transfer - </span>
                      Bank transfers are usually the cheapest and convectional
                      option when it comes to remit funds. It can be done over
                      the counter from our international location by paying
                      personal visit or by your mobile application provided by
                      our correspondent partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto py-4 sm:py-14">
        <TeamMember  />
      </div> */}
    </>
  );
};

export default AboutUs;
