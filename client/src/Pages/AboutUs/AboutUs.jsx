import Banner from "../../assets/bannerImages/bannerImage-1.jpg";

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
          <h3 className="text-4xl font-medium font-roboto tracking-wide">
            We understand your unique needs !
          </h3>
          <p className="font-roboto text-slate-900 text-xl tracking-normal font-light py-4 mx-80">
            Advance Money Transfer P Ltd is a money transfer company established
            in April 2005 under Nepalese Company Act 1996. The company has been
            serving Nepalese community in different parts of the world by
            providing a safe, convenient, speedy and economical way of remitting
            money to Nepal.
          </p>
        </div>
      </div>

      <div className="bg-offWhite">
        <div className="container mx-auto py-16">
          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-4xl font-medium font-roboto tracking-wide pb-2">
                AMT Group
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 h-[380px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 rounded-full bg-brand text-white flex justify-center items-center text-2xl">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                      It is the Nepal's leading service sector group amongst
                      Nepal's leading corporation anchored by highly qualitative
                      and professionals of more than 300 employees.
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
                      Over the years AMT Group has emerged as a major company
                      with a dominant presence in remittance and banking.
                      Advance Money Transfer Pvt Ltd is a wholly owned venture
                      of AMT Group with crystal clear vision and formidable
                      presence in remittance.
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
                      The Group comprises of companies operating in remittance,
                      banking, aviation, air ticketing industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-4xl font-medium font-roboto tracking-wide pb-2">
                Sustainability Promise
              </h3>
              <div className=" bg-white p-6 flex flex-col gap-6 h-[380px] shadow-md border">
                <div className="flex gap-4 items-center">
                  <div>
                    <p className="w-10 h-10 bg-brand text-white flex justify-center items-center text-2xl">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-light text-xl">
                    The company has extensive networks of over 150 branches in Nepal and overseas partners, correspondents in Hong Kong, Israel, Korea, United Kingdom, Malaysia, Australia, USA, UAE, Kuwait, Qatar, Bahrain, and other parts of the world.
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
                    We have strategic alliances with Galaxy Network Limited, ARY Speed Remit to serve prime worldwide in the delivery of remittances in Nepal.
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
                    AMT remit is an excellent product successfully providing payment and account credit services to Nepalese Diaspora remitting money to their family and relatives in Nepal. We have been able to extend this unique service to our valued clients covering the entire regions in Nepal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
