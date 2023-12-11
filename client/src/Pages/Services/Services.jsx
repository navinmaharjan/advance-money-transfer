import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import ServiceOne from "../../assets/services/serviceImage-1.jpg";
import ServiceTwo from "../../assets/services/serviceImage-2.jpg";
const Services = () => {
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
            Services
          </h3>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-4 sm:py-16 flex flex-col gap-8 sm:gap-20">
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0"
            data-aos="zoom-in-left"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="sm:w-1/2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">
                Immediate <span className="text-brand">Cash</span>
              </h1>
              <p className="xl:mr-20 text-base text-slate-600">
              When it comes to accessing your funds quickly and conveniently, our immediate cash withdrawal service is designed to meet your urgent financial needs. Whether you're facing unexpected expenses or require instant access to your remittance, our streamlined process ensures that you can receive your cash without any delay. With just a few simple steps, you'll be able to withdraw your funds instantly, providing you with the financial flexibility you require.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceTwo}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">Instant <span className="text-brand">Deposits</span></h1>
              <p className="xl:mr-20 text-base text-slate-600">
              With our state-of-the-art technology, we've revolutionized the deposit process, offering you the incredible convenience of instant deposits. Say goodbye to waiting for funds to clear or worrying about delays. With just a few taps, your money is instantly available in your account, ready for you to use. Whether you're receiving payments or making deposits, our advanced system ensures that you have immediate access to your funds, empowering you to manage your finances with speed and efficiency.
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="w-full sm:w-1/2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">
                Differently Able <span className="text-brand">Customers</span>
              </h1>
              <p className="xl:mr-20 text-base text-slate-600">
              We got the extra mile to ensure that our disabled customers receive the utmost convenience and support. Our specialized payment delivery service brings financial transactions right to their doorstep. We understand that mobility can be a challenge for some individuals, so we prioritize tailoring our services to their unique needs. With our dedicated team of professionals, we guarantee a seamless and secure payment experience, providing peace of mind to our valued customers. Trust us to deliver exceptional service and bring financial accessibility directly to their home.
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceOne}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center gap-4 sm:gap-10 flex-col sm:flex-row px-4 sm:px-0 rounded-lg"
            data-aos="zoom-in-right"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className="w-full sm:w-1/2">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <img
                  src={ServiceTwo}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="text-2xl sm:text-2xl sm:pb-4">
                <span>Wallet</span>
              </h1>
              <p className="xl:mr-20 text-base text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eos assumenda excepturi fuga minus earum delectus vero unde quas
                et veniam reprehenderit, iusto eaque, repellendus quos tenetur
                incidunt esse odio quae quibusdam nisi sed enim dolorum? Libero
                ex dicta, ab at quae corporis aspernatur dolores pariatur
                asperiores vero a aut distinctio, officia quas, reprehenderit
                natus. Nihil animi, repellat reprehenderit distinctio accusamus
                id quas laudantium ad explicabo soluta tempore, dolore
                molestiae. Amet assumenda corporis vero? Vel fugit, aperiam
                necessitatibus, consequatur ullam pariatur veritatis incidunt
                fugiat sapiente quis quod repellat quia ratione facere.
                Perferendis et commodi porro, id animi maiores debitis fugit
                similique soluta tenetur voluptatibus, aspernatur voluptates
                illum dignissimos alias molestiae quia. Culpa eum ad minus quas
                illo! Quos, necessitatibus vel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
