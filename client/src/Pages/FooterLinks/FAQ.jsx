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
            Frequently Asked Questions
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="w-1/2 container mx-auto text-xl text-slate-700  py-4 sm:py-16">
          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              {" "}
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;What
              is this Service?
            </h3>
            <p>
              Advance Money Transfer offers you a quick, reliable and secure way
              to send money to anyone in Nepal. Money remitted from anywhere in
              the world can be instantly cashed through the more than 350 AMT
              Counters anywhere in Nepal.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;How
              long does it take to reach my money?
            </h3>
            <p>
              The entire transaction is completed online and within a few
              minutes .Your money reaches the destination within seconds and
              your beneficiary can collect the money from AMT Counter at the
              same time.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;Does
              my beneficiaries are informed?
            </h3>
            <p>
              AMT remit send the automatically SMS to the beneficiary who have
              mention the mobile number of the receiver and the receiving agent
              also calls to the beneficiary to collect the money. The sender can
              also give the information to their beneficiary themselves. For any
              other in formations, customers may contact to the AMT- Customer
              Support Cell with Toll Free Number.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;Why
              choose this service?
            </h3>
            <p>
              It provides the easiest way to receive the money within a few
              minute and agents are located in every part of Nepal. This service
              offers the best exchange rate and lowest charges.
            </p>
          </div>
          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;Is my
              money safe?
            </h3>
            <p>
              It uses the state of art technology and its operation is done
              through secure Banking Channels. AMTRemit is a web based solution
              is protected by GEOTRUST 128 bits SSL and Digital Certificates.
              The money is delivered to the beneficiary with the proper
              identification only hence the money is delivered to the
              beneficiary safely.
            </p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl font-semibold">
              <i className="fa-solid fa-angle-right text-brand"></i> &nbsp;What
              are the payment modes offered by Advance Money Transfer?
            </h3>
            <p>
              Money remitted from anywhere can be instantly cashed across the
              AMT counters available in the Nepal. We make sure that the
              remittance gets to where it's needed without any complication. The
              Remitter can also choose to deposit the amount directly on the
              beneficiary's bank account. We can instantly deposit money
              transferred from anywhere in the world to the remitter's bank
              account here in Nepal within 24 hours. For this we have
              corresponding relation with all major banks and financial
              institution in Nepal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
