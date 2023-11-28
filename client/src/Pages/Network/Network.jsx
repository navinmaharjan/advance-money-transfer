import Banner from "../../assets/bannerImages/bannerImage-3.jpg";

const Network = () => {
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
            Network
          </h3>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <div className="flex justify-center">
          <h1 className="text-center text-2xl font-normal border-b border-brand pb-4">
            We using all the payment networks of our partner company.
          </h1>
        </div>

        <div className="flex justify-center items-center gap-4 py-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">S.no</p>
            <p>1</p>
            <p>2</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">
              Partner Company
            </p>
            <p>NIC Asia Bank Limited</p>
            <p>Modern Remittance</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">Address</p>
            <p>Jamal</p>
            <p>Sundhara</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">Website</p>
            <p> www.nicasiabank.com </p>
            <p>www.modernremit.com.np</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">
              Contact Number
            </p>
            <p>+977-4556677</p>
            <p>+977-4589076</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="bg-offWhite py-2 px-4 border font-medium">
              Contact Person
            </p>
            <p>Mr. Sagar Dahal</p>
            <p>Ms. Renuka Thapa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
