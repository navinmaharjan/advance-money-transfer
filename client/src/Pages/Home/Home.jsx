import BannerImage1 from "../../assets/bannerImages/bannerImage-1.jpg";
import AboutUsHome from "./AboutUsHome";
import OurBusinessPartners from "./OurBusinessPartners";
import OurServices from "./OurServices";
import VideoGallery from "./VideoGallery";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[800px]">
        <div className="absolute w-full h-[800px] bg-black opacity-30 z-10"></div>
        <img
          src={BannerImage1}
          alt="home banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <h1 className="uppercase text-7xl text-white font-bold tracking-wider">
            we are here for you
          </h1>
          <p className="text-white text-2xl font-extralight tracking-wider">
            Your safe, easy and reliable money transfer partner
          </p>
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
