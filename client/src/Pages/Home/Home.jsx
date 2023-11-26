import BannerImage1 from "../../../public/bannerImages/bannerImage-1.jpg";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[800px]">
        <img src={BannerImage1} alt="home banner" className="absolute w-full h-full object-cover" />
      </div>
    </>
  );
};

export default Home;
