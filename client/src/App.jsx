import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Network from "./Pages/Network/Network";
import Services from "./Pages/Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/network" element={<Network/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
