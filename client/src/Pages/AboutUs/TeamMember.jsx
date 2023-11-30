import TeamData from "../../Data/TeamData";

const TeamMember = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl sm:text-4xl font-medium font-roboto tracking-wide sm:pb-2">
          Our <span className="text-brand">Team Members</span>
        </h3>
      </div>
      <div
        className="container mx-auto py-4 sm:py-16 flex flex-wrap gap-4 sm:gap-10 justify-center"
        data-aos="zoom-in"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {TeamData.map((item) => (
          <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-0">
            <div
              className="relative w-40 h-40 sm:w-60 sm:h-60 rounded-full overflow-hidden"
              key={item.id}
            >
              <img
                src={item.teamMemberImage}
                alt=""
                className="relative w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 text-xl font-semibold">
              {item.designation}
            </p>
            <p className="text-slate-500 text-xl">{item.contact}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamMember;
