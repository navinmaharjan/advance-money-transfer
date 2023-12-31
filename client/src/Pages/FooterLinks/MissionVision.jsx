import Banner from "../../assets/bannerImages/bannerImage-3.jpg";
import TeamMember from "../AboutUs/TeamMember";

const MissionVision = () => {
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
          <h3 className="text-xl sm:text-2xl text-white font-semibold tracking-wide">
            Mission Vision & Commitment
          </h3>
        </div>
      </div>
      <div className="bg-offWhite">
        <div className="xl:w-1/2 container mx-auto text-base text-slate-700  py-8 px-4 sm:px-0"  data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true">
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
          </p>
          <h3 className="pt-4 font-semibold text-lg">Our Vision</h3>
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

         
        </div>
      </div>
    </>
  );
};

export default MissionVision;
