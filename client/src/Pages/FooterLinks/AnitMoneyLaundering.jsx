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
            Anti Money Laundering
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="sm:w-1/2 container mx-auto text-base text-slate-700  py-4 sm:py-20 px-4 sm:px-0">
          <p>
            Money laundering is the illegal attempt to hide the true source of
            money. It generally involves money that has been obtained through
            criminals' activity, frequent drug dealing, smuggling, terrorist
            activities etc. money laundering use a variety of means to launder
            money so that it is tough to detect.
          </p>

          <p className="pt-4">
            We at AMT are very much concerned about protecting our services from
            illegal activities. It is strict AML policy not to do business with
            money launders or other criminals. We realize, however, that in many
            cases institution may not be aware that they are being used by money
            launders. We therefore provide all of our staff and agents strict
            guidelines to control and beat money laundering and illegal
            activities. Our AMT policy and procedures are as follows:
          </p>

          <p className="pt-2">
            Identification procedure and the concept of Know Your Customer (KYC)
            Obtain valid identification (ID), proper identification and address
            with photograph; issued from the local government or authorities.
            Verify details with origin Full signature of the customer on the
            form of remittance. Sources and quantum of amount. Additional
            precaution on transactions involving amounts crossing the threshold
            limit, as per local rules and AMT limit. True copy of original ID is
            being kept on record after due verification with originals. Purpose
            of remittance and source of income is mentioned by the customer.
            This will enables to verify the appropriateness of the transaction.
            Breaking up of transactions to circumvent the limit restrictions is
            not allowed. Proper methods are being evolved to detect multiple
            transactions or split transactions in order to get required
            information/documents
          </p>

          <h3 className="text-lg font-semibold pt-4">Internal Control & Communication</h3>
          <p className="pt-2">
            Proper procedures have been set up for the staff to have effective
            control over the activities undertaken The format of the application
            form fro remittance has been designed to confirm the local
            regulations and is able to capture all the required data for
            enabling effective supervision and control. Application forms
            contain a declaration from the customer certifying the correctness
            of the data provided by him/her and in case of registered customers
            any change in the address given is being notified to the agent. 4
            Record Keeping a. records are being kept for a minimum period of 5
            years. b. records provide the sufficient basic information on the
            customer and also able to reconstruct the transaction if needed.
            Appropriate Training to the Staff Staffs have been trained on all
            matters pertaining to Money Laundering and Terrorist Financing.
            Training has been given in line with their responsibilities.
            Reporting to Regulatory Authorities There is a proper reporting
            system in place both within the organization and to the Regulatory
            Authorities.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
