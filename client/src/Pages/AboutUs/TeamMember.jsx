import TeamData from "../../Data/TeamData";

const TeamMember = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl sm:text-2xl font-medium font-roboto tracking-wide sm:pb-2">
          {/* Our <span className="text-brand">Team Members</span> */}
        </h3>
      </div>
      {/* Chairman SEction */}
      <div
        className="container mx-auto py-4 flex flex-wrap gap-4 sm:gap-10 justify-center"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {TeamData.slice(0,1).map((item) => (
          <div className="flex flex-col justify-center items-center px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden drop-shadow-xl"
              key={item.id}
            >
              <img
                src={item.teamMemberImage}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 text-lg font-semibold">
              {item.designation}
            </p>
           
            <p className="text-slate-500 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
      
      {/* Director GM and Consulate Section */}
      <div
        className="container mx-auto  flex flex-col sm:flex-row sm:flex-wrap  gap-4 sm:gap-6 justify-center sm:pt-4"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {TeamData.slice(1,4).map((item) => (
          <div className="flex flex-col justify-center items-center px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-40 sm:h-40 rounded-full overflow-hidden drop-shadow-xl"
              key={item.id}
            >
              <img
                src={item.teamMemberImage}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 text-lg font-semibold">
              {item.designation}
            </p>
           
            <p className="text-slate-500 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
      
      {/* Finance Department */}
      <div
        className="container mx-auto  flex flex-wrap gap-4 sm:gap-10 justify-center sm:pt-4"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {TeamData.slice(4,5).map((item) => (
          <div className="flex flex-col justify-center items-center px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-32 sm:h-32 rounded-full overflow-hidden drop-shadow-xl"
              key={item.id}
            >
              <img
                src={item.teamMemberImage}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 text-lg font-semibold">
              {item.designation}
            </p>
           
            <p className="text-slate-500 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
      
      {/* Compliance Department */}
      <div
        className="container mx-auto flex flex-wrap gap-4 sm:gap-10 justify-center sm:pt-4"
      >
        {TeamData.slice(5,6).map((item) => (
          <div className="flex flex-col justify-center items-center px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-28 sm:h-28 rounded-full overflow-hidden drop-shadow-xl"
              key={item.id}
            >
              <img
                src={item.teamMemberImage}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 text-lg font-semibold">
              {item.designation}
            </p>
           
            <p className="text-slate-500 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamMember;
