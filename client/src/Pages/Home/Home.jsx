import AboutUsHome from "./AboutUsHome";
import Banner from "./Banner";
import ExistingCoverage from "./ExistingCoverage";
import OurBusinessPartners from "./OurBusinessPartners";
import OurServices from "./OurServices";
import TodaysExchangeRate from "./TodaysExchangeRate";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUsHome data-aos="zoom-in"/>
      <OurServices />
      <ExistingCoverage />
      {/* <OurBusinessPartners /> */}
      {/* <TodaysExchangeRate /> */}
    </>
  );
};

export default Home;
