import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/pages/About";
import Choose from "./components/choose/Choose";
import Cardcars from "./components/choose/Cardcars";
import Clients from "./components/choose/Clients";
import Booking from "./components/pages/Booking";
import Contact from "./components/choose/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Cars from "./components/pages/Cars";

function App() {
  return (
    <div className=" App">
      <Router>
        <Header />
        <Hero />
        <About />
        <Choose />
        <Cardcars />
        <Clients />
        <Booking />
        <Contact />
        <Footer />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cars />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
