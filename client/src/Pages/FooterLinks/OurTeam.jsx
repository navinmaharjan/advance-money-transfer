import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import TeamMember from "../AboutUs/TeamMember";

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
            Our Team
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="xl:w-1/2 container mx-auto text-base text-slate-700  py-4 px-4 sm:px-0">
          <div>
            <TeamMember />
          </div>

          <div className=" container mx-auto text-base text-slate-700  py-4 sm:py-8 sm:px-0">
            <p>
              The AMT is leaded by chairman{" "}
              <span className="font-semibold">Saraswati Gautam Gyawali</span>, since October 18 2023.    </p>
              
              <p className="pt-4"> <span className="font-semibold">Krishna Prasad Gyawali</span> is the former chairman who is 
              young and successful professional. He is  the MD of Union
              International Tours and Travel Pvt Ltd, Union Real Estate Pvt.
              Ltd and  also a director of Kumari Bank Limited, Agantuk
              Resort, Manang Air Pvt. Ltd, Thamel Hotel and Sweet (Ramada
              Incore). Mr. Gyawali's envision brings a very successful track
              record in all of his ventures. His management style is innovative to
              run the organization with best corporate culture. </p>
              
              <p className="pt-4">General Manager
              <span className="font-semibold"> Krishna Prasad Gnawali </span>holding MBA with several years of
              experience in the management sector supporting chairman as key
              person in the company.</p>
         

            <p className="pt-4">
              With 22 years of experience in banking, particularly in the field
              of remittance, <span className="font-semibold">Praveen Acharya</span> has served for 21 years in A Class
              Commercial Banks in Nepal, including roles at Himalayan Bank
              (Himal Remit) and Sunrise Bank (Sunrise Remit). This extensive
              background demonstrates a profound understanding of financial
              operations, regulatory frameworks, and the intricacies of managing
              remittance services within the banking industry.
            </p>
          </div>
          <p className="pb-8">
            Our company has latest technologies and equipment for remittance
            services. We currently have 11 skilled staffs in head office
            actively performing their tasks. They all are capable of handling
            any problems in day to day operations including sub agency
            recruitment process, keeping account records, day to day operations,
            maintaining good relations with customers, principals, branches, sub
            agents and with banks. We always keep sufficient cash reserve
            balance in our head office and branches and especially, we select
            the sub agents that have the good financial background and we send
            the paid amount on the vary next of the transaction. So there are
            not any chances of shortage of monies in our branches and sub agent
            locations. Regarding the problems encountered by receivers or
            beneficiaries in receiving money, our branches and sub agents try to
            solve the issues by themselves if any problem that cannot be solved,
            they instantly inform through phoning, live online msn, emailing,
            faxing to concerned areas.
          </p>

          {/* <h3 className="pt-4 font-semibold text-lg">Our Vision</h3>
          <p>
            Our vision is to run our business as a leading money transfer
            company. Our vision encompasses the following{" "}
            <span className="font-semibold">Successful</span>{" "}
            <span className="font-semibold">Innovative</span>
            <span className="font-semibold"> Efficient</span> We are always in
            the way to success through innovation providing the efficient
            services to the customer. Quality delivery is always being our
            slogan. We always act for building long term customer relationship.
            We are conscious on how we can attract new customers, how they can
            be retained for long periods and how we can grow our service users.
            For this, we, our Research and Development & Marketing Department,
            always focus on approaching to the customers with new ideas,
            effective marketing strategies with better offers. We treat our
            customers as partners. Their advices, complaints are highly welcomed
            and we use them correct our weak services and offer better services.
            Through total quality management approach, we are continuously
            improving all money transferring processes and services.
          </p>

          <h3 className="pt-4 font-semibold text-lg">Our Commitment</h3>
          <p>
            We are confident that Advance Money Transfer Pvt Ltd will creatively
            and effectively confront the challenges undoubtedly come in coming
            future, and continue to take due advantage of the opportunities in
            the year. In this regard, we have not only enjoyed strategic
            alliances with International remittance companies but have also
            consistently working to expand our services through tying up with
            new leading international remittance companies. We are also adding
            financially and technically capable outlets or locations to be near
            our customers. We have targeted adding more than{" "}
            <span className="font-semibold">300 new locations </span>
            within one year. We are fully committed on these objectives.
          </p>

          <h3 className="pt-4 font-semibold text-lg">Our Mission</h3>
          <p>
            We will provide all our valued customers a very much quick, secure,
            reliable and convenient money transfer services. We promote our
            services in such a way that every individual customer will feel and
            enjoy the best services. We will be as near as their person
            arranging the service centers near to your person (beneficiary). We
            will deliver quality services with minimum service charges comparing
            to other remittance companies. Our qualified staffs will assist all
            customers to make them sure of using our services.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
