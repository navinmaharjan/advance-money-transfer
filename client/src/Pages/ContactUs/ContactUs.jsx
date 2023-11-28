import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
const ContactUs = () => {
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
            Contact Us
          </h3>
        </div>
      </div>

      <div className="bg-offWhite">
        <div className="container mx-auto w-full py-16">
          <div className="flex">
            <div className="w-3/5 bg-red-300">
              <div className="w-full text-4xl font-light pb-4 text-center">
                <h3>
                  Get in touch with <span className="text-brand">Us</span>
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="w-full flex flex-col gap-4 xl:bg-white xl:border xl:drop-shadow-2xl xl:w-3/5 xl:p-8 md:w-4/5 md:bg-white md:drop-shadow-xl md:p-8">
                  <div>
                    <p>Name</p>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <input
                      type="text"
                      placeholder="Your Contact Number"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-2 border"
                    />
                  </div>
                  <div>
                    <p>Message</p>
                    <textarea
                      type="text"
                      placeholder="Your Message"
                      className="w-full h-40 p-2 border"
                    />
                  </div>
                  <div className="pt-4 text-start">
                    <button className="bg-brand text-white px-8 py-2 tracking-wide font-semibold transition duration-300">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 bg-blue-400">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
