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
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
