import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Product from "./Components/Product";
import Testimonial from "./Components/Testimonial";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Product />
      <Testimonial />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
