import React from "react";
import "../../../App.css";
import Cards from "../Cards";
import MainSection from "../MainSection";
import Footer from "../Footer";
import { Compare } from "../Compare";
function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Compare position={50} />
      <Footer />
    </>
  );
}

export default Home;
