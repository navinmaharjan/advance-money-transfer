import BannerImage1 from "../../assets/bannerImages/bannerImage-1.jpg";
import AboutUsHome from "./AboutUsHome";
import OurBusinessPartners from "./OurBusinessPartners";
import OurServices from "./OurServices";
import VideoGallery from "./VideoGallery";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[800px]">
        <img src={BannerImage1} alt="home banner" className="absolute w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 ">
          <h1 className="uppercase text-4xl text-white">we are here for you</h1>
        </div>
      </div>
      <AboutUsHome />
      <OurServices />
      <OurBusinessPartners />
      <VideoGallery />
    </>
  );
};

export default Home;
