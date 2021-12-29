import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Product />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
