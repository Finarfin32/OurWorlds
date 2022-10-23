import React from "react";
import "../../../App.css";
import Cards from "../Cards";
import MainSection from "../MainSection";
import Slider from "../Slider";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
