import Banner from "../../assets/bannerImages/bannerImage-3.jpg";

const Network = () => {
  return (
    <>
      <div
        className="container mx-auto py-4 sm:py-16"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        <div className="flex justify-center">
          <h1 className="text-center text-base sm:text-lg font-normal">
            We using all the payment networks of our partner company.
          </h1>
        </div>

        <table className="container">
          <thead>
            <tr>
              <th className="sm:w-16  bg-brand text-white font-medium border border-black">S.no</th>
              <th className="sm:w-80  bg-brand text-white font-medium border border-black">
                Partner Company
              </th>
              <th className="border sm:w-48  bg-brand text-white font-medium border-black">Address</th>
              <th className="border sm:w-48  bg-brand text-white font-medium border-black">Website</th>
              <th className="border sm:w-60  bg-brand text-white font-medium border-black">
                Contact Number
              </th>
              <th className="border sm:w-60  bg-brand text-white font-medium border-black">
                Contact Person
              </th>
              <th className="border sm:w-40 bg-brand text-white font-medium border-black">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sm:w-20 bg-gray-200 border border-black text-start">
                1
              </td>
              <td className="sm:w-80 bg-gray-200 border border-black text-start">
                NIC ASIA Bank
              </td>
              <td className="border sm:w-48 bg-gray-200 border-black text-start">
                Jamal
              </td>
              <td className="border sm:w-48 bg-gray-200 border-black text-start">
              <a
                  href="https://www.nicasiabank.com"
                  className="text-brand hover:opacity-70"
                  target="_blank"
                >
                  www.nicasiabank.com
                </a>
              </td>
              <td className="border sm:w-60 bg-gray-200 border-black text-start">
                Demo no.
              </td>
              <td className="border sm:w-60 bg-gray-200 border-black text-start">
                Demo Name
              </td>
              <td className="border sm:w-40 bg-gray-200 border-black text-start">
                <a
                  href="https://www.nicasiabank.com/list-of-our-partners-and-agents/"
                  className="text-brand hover:opacity-70"
                  target="_blank"
                >
                  Click for Detail
                </a>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>

        {/* <div className="flex justify-center items-center gap-4 py-10">
          <div className="flex sm:flex-col gap-2 items-center justify-center">
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
        </div> */}
      </div>
    </>
  );
};

export default Network;
