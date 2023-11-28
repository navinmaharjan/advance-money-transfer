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
          <div className="flex items-center">
            <div className="w-3/5">
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
            <div className="w-2/5 drop-shadow-2xl">
              <div className="flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6140588480694!2d85.3117201!3d27.6983209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb185370dd790f%3A0x11607ddc8072d68!2sAdvance%20Money%20Transfer%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1701168510216!5m2!1sen!2snp"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-60"
                ></iframe>
                <div>
                  <div className="p-8 bg-white">
                    <div className="flex gap-4 items-center py-2">
                      <div className="font-roboto tracking-wide">
                        <h1 className="text-xl font-medium py-2">Israel</h1>
                        <div className="text-slate-700 flex flex-col gap-2">
                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-location-dot text-brand"></i>
                            </div>
                            <div>
                              <p>Israel 8 Levinsky St. Tel- Aviv,</p>
                              <p>New Central Station, Str. No:4436</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-phone text-brand"></i>
                            </div>
                            <div>
                              <p>972 3 6871372</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-fax text-brand"></i>
                            </div>
                            <div>
                              <p>972 3 6871372</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="font-roboto tracking-wide">
                        <h1 className="text-xl font-medium py-2">Nepal</h1>
                        <div className="text-slate-700 flex flex-col gap-2">
                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-location-dot text-brand"></i>
                            </div>
                            <div>
                              <p>3rd Floor, Curchil Complex,</p>
                              <p>China Town, Sundhara, Kathmandu</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-phone text-brand"></i>
                            </div>
                            <div>
                              <p>+977 01 5355288</p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-center">
                            <div>
                              <i className="fa-solid fa-envelope text-brand"></i>
                            </div>
                            <div>
                              <p>amt.remt@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ContactUs;
