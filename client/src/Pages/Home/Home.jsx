import BannerImage1 from "../../assets/bannerImages/bannerImage-1.jpeg";
import AboutUsHome from "./AboutUsHome";
import OurBusinessPartners from "./OurBusinessPartners";
import OurServices from "./OurServices";
import TodaysExchangeRate from "./TodaysExchangeRate"

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
          <h1 className="uppercase text-8xl text-white font-bold tracking-wider">
            ADVANCE MONEY TRANSFER
          </h1>
          <div className="flex justify-center">
            <p className="text-white text-2xl font-light tracking-wider bg-brand py-3 px-5 rounded-lg">
              Networks of over 150 branches in Nepal
            </p>
          </div>
        </div>
      </div>
      <AboutUsHome />
      <OurServices />
      <OurBusinessPartners />
      <TodaysExchangeRate />
    </>
  );
};

export default Home;
