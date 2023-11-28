import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import ServiceOne from "../../assets/services/serviceImage-1.jpg";
import ServiceTwo from "../../assets/services/serviceImage-2.jpg";
const Services = () => {
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
            Services
          </h3>
        </div>
      </div>

      <div className="bg-offWhite">
        <div className="container mx-auto py-16 flex flex-col gap-20">
          <div className="flex items-center gap-10">
            <div className="w-1/2">
              <h1 className="text-4xl pb-4">
                Immediate <span className="text-brand">Cash</span>
              </h1>
              <p className="mr-20 text-base text-slate-600">
                One of the most popular payout methods for international money
                transfers from anywhere in the world to any location in Nepal is
                cash transfer; it's straightforward, easy to use, speedy, and
                hassle-free. Money can be sent in cash and received in cash by
                the recipient in a matter of minutes. A control number is sent
                to you when you send money, and you must give it to the
                recipient. To accept the funds, the recipient goes to an Advance
                Money Transfer agent and presents a legitimate ID along with the
                Control No.
              </p>
            </div>
            <div className="w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10">
          <div className="w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceTwo}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-4xl pb-4">
                Deposits
              </h1>
              <p className="mr-20 text-base text-slate-600">
                One of the most popular payout methods for international money
                transfers from anywhere in the world to any location in Nepal is
                cash transfer; it's straightforward, easy to use, speedy, and
                hassle-free. Money can be sent in cash and received in cash by
                the recipient in a matter of minutes. A control number is sent
                to you when you send money, and you must give it to the
                recipient. To accept the funds, the recipient goes to an Advance
                Money Transfer agent and presents a legitimate ID along with the
                Control No.
              </p>
            </div>
            
          </div>
          <div className="flex items-center gap-10">
            <div className="w-1/2">
              <h1 className="text-4xl pb-4">
                Disable <span className="text-brand">Customers</span>
              </h1>
              <p className="mr-20 text-base text-slate-600">
                One of the most popular payout methods for international money
                transfers from anywhere in the world to any location in Nepal is
                cash transfer; it's straightforward, easy to use, speedy, and
                hassle-free. Money can be sent in cash and received in cash by
                the recipient in a matter of minutes. A control number is sent
                to you when you send money, and you must give it to the
                recipient. To accept the funds, the recipient goes to an Advance
                Money Transfer agent and presents a legitimate ID along with the
                Control No.
              </p>
            </div>
            <div className="w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;