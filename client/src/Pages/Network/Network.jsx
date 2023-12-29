import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import networkData from "../../Data/NetworkData";
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
              <th className="sm:w-16  bg-brand text-white font-medium border border-black">
                S.no
              </th>
              <th className="sm:w-80  bg-brand text-white font-medium border border-black">
                Partner Company
              </th>
              <th className="border sm:w-48  bg-brand text-white font-medium border-black">
                Address
              </th>
              <th className="border sm:w-48  bg-brand text-white font-medium border-black">
                Website
              </th>
              <th className="border sm:w-60  bg-brand text-white font-medium border-black">
                Contact Number
              </th>
              <th className="border sm:w-60  bg-brand text-white font-medium border-black">
                Contact Person
              </th>
              <th className="border sm:w-40 bg-brand text-white font-medium border-black">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {networkData.map((item) => (
              <tr>
                <td className="sm:w-20 bg-gray-200 border border-black text-start">
                  {item.id}
                </td>
                <td className="sm:w-80 bg-gray-200 border border-black text-start">
                 {item.partnerCompany}
                </td>
                <td className="border sm:w-48 bg-gray-200 border-black text-start">
                 {item.partnerAddress}
                </td>
                <td className="border sm:w-48 bg-gray-200 border-black text-start">
                  <a
                    href={item.partnerWebsite}
                    className="text-brand hover:opacity-70"
                    target="_blank"
                  >
                  {item.partnerWebsite}
                  </a>
                </td>
                <td className="border sm:w-60 bg-gray-200 border-black text-start">
                 {item.partnerContact}
                </td>
                <td className="border sm:w-60 bg-gray-200 border-black text-start">
                  {item.partnerContactPerson}
                </td>
                <td className="border sm:w-40 bg-gray-200 border-black text-start">
                  <a
                    href={item.partnerLink}
                    className="text-brand hover:opacity-70"
                    target="_blank"
                  >
                    Click for Detail
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Network;
