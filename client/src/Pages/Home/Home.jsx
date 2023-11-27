import BannerImage1 from "../../assets/bannerImages/bannerImage-1.jpg";
import AboutUsHome from "./AboutUsHome";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[800px]">
        <img src={BannerImage1} alt="home banner" className="absolute w-full h-full object-cover" />
      </div>
      <AboutUsHome />
      <OurServices />
    </>
  );
};

export default Home;
