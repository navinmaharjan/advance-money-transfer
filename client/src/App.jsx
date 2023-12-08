
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Network from "./Pages/Network/Network";
import Services from "./Pages/Services/Services";
import Gallery from "./Pages/Gallery/Gallery";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ScrollToTop from "./Components/ScrollToTop";
import CompanyProfile from "./Pages/FooterLinks/CompanyProfile";
import Managment from "./Pages/FooterLinks/Managment";
import OurTeam from "./Pages/FooterLinks/OurTeam";
import ProductServices from "./Pages/FooterLinks/ProductServices";
import OurNetwork from "./Pages/FooterLinks/OurNetwork";
import AffiliateCompany from "./Pages/FooterLinks/AffiliateCompany";
import AnitMoneyLaundering from "./Pages/FooterLinks/AnitMoneyLaundering";
import FAQ from "./Pages/FooterLinks/FAQ";
import MissionVision from "./Pages/FooterLinks/MissionVision";
import WhyChoose from "./Pages/FooterLinks/WhyChoose";
import GoToTopButton from "./Components/GoToTop";

const App = () => {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/network" element={<Network/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/company-profile" element={<CompanyProfile/>} />
        <Route path="/managment" element={<Managment/>} />
        <Route path="/ourteam" element={<OurTeam/>} />
        <Route path="/vision-mission-commitment" element={<MissionVision/>} />
        <Route path="/why-choose-us" element={<WhyChoose/>} />
        <Route path="/product-services" element={<ProductServices/>} />
        <Route path="/our-network" element={<OurNetwork/>} />
        <Route path="/affiliate-company" element={<AffiliateCompany/>} />
        <Route path="/anti-money-laundering" element={<AnitMoneyLaundering/>} />
        <Route path="/FAQs" element={<FAQ/>} />
      </Routes>
      <GoToTopButton />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
