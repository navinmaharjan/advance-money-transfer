import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import TeamMember from "./TeamMember";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full h-60">
        {/* <div className="absolute w-full h-60 bg-black opacity-50 z-10"></div> */}
        <img
          src={Banner}
          alt="banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h3 className="text-4xl text-white font-semibold tracking-wide">
            About Us
          </h3>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="text-center">
          {/* <h3 className="text-4xl font-medium font-roboto tracking-wide">
            We understand your unique needs !
          </h3> */}
          <p className="font-roboto text-slate-900 text-xl tracking-normal font-light py-4 mx-60">
            Established in April 2005 Advance Money Transfer [AMT] has pioneered
            Nepalese Remittance industry near over two decades. Licensed by
            Central Bank of Nepal (Nepal Rastra Bank) under Nepalese Community
            Act 1996 to conduct money transfer services in Nepal, the company
            has been serving Nepalese community from various parts of the world
            by allowing safe, convenient, speedy and economical way of remitting
            funds to Nepal.
          </p>

          <p className="font-roboto text-slate-900 text-xl tracking-normal font-light py-4 mx-60">
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

          <p className="font-roboto text-slate-900 text-xl tracking-normal font-light py-4 mx-60">
            We have strategic alliances with Galaxy Network Limited, ARY Speed
            Remit, Instant Cash, to serve prime worldwide in the delivery of
            remittances in Nepal. AMT aspires to revolutionize the remittance
            industry by employing state of art IT Technology.
          </p>
        </div>
      </div>

      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <div className="flex gap-8">
            <div className="w-1/2">
              <h3 className="text-4xl font-medium font-roboto tracking-wide pb-2">
                Our <span className="text-brand">Features</span>
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 h-[540px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
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
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">
                        Instant Bank Transfers:{" "}
                      </span>
                      Real-time crediting to any bank accounts in Nepal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">Robust Security </span>
                      Ensures a secure and reliable remittance
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      4
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">
                        Speed & Affordability{" "}
                      </span>
                      Fast and convenient transactions with minimal charges
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      5
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">Compliance Assured </span>
                      AML and KYC compliant features, with risk assessment and
                      transactions monitoring
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      6
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">Helpdesk Support </span>
                      Team of dedicated Helpdesk officials for assistance in
                      case of international or domestic payment issues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-4xl font-medium font-roboto tracking-wide pb-2">
                Best ways to <span className="text-brand">send money</span> from
                us
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 h-[540px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center text-2xl">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      <span className="font-semibold">Direct Debit - </span>
                      Direct Debit is a convenient option that lets us take
                      money from your account once you have authorised the
                      payment on our remitting correspondent's site
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center text-2xl">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
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
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center text-2xl">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
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
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center text-2xl">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
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
     <div className="container mx-auto py-16">
      <TeamMember />

     </div>
    </>
  );
};

export default AboutUs;
