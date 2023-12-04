import AboutUsHome from "./AboutUsHome";
import Banner from "./Banner";
import ExistingCoverage from "./ExistingCoverage";
import OurBusinessPartners from "./OurBusinessPartners";
import OurServices from "./OurServices";
import TodaysExchangeRate from "./TodaysExchangeRate";
import TrackPayment from "./TrackPayment";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUsHome data-aos="zoom-in"/>
      <OurServices />
      <ExistingCoverage />
      <OurBusinessPartners />
      <TodaysExchangeRate />
      {/* <TrackPayment /> */}
    </>
  );
};

export default Home;
