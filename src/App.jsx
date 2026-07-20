import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import FloatingContact from "./components/FloatingContact";
import WhyUs from "./pages/WhyUs";
import GymPersonal from "./pages/GymPersonal";
import CricketCoaching from "./pages/CricketCoaching";
import UmpiringTraining from "./pages/UmpiringTraining";
import HomeTraining from "./pages/HomeTraining";
import Suppliment from "./pages/Suppliment";
import SportsWear from "./pages/SportsWear";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
<FloatingContact/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/gym" element={<GymPersonal />} />
        <Route path="/cricket" element={<CricketCoaching />} />
        <Route path="/umpiring" element={<UmpiringTraining />} />
        <Route path="/home-trainer" element={<HomeTraining />} />
        <Route path="/supplements" element={<Suppliment />} />
        <Route path="/sportswear" element={<SportsWear />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;