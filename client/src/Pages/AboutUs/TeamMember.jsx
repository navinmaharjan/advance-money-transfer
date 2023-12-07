import TeamData from "../../Data/TeamData";

const TeamMember = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl sm:text-2xl font-medium font-roboto tracking-wide sm:pb-2">
          Our <span className="text-brand">Team Members</span>
        </h3>
      </div>
      <div
        className="container mx-auto py-4 sm:py-14 flex flex-wrap gap-4 sm:gap-10 justify-center"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {TeamData.map((item) => (
          <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden drop-shadow-xl"
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
