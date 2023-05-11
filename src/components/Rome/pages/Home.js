import React, { useState, useEffect } from "react";
import "../../../App.css";
import Cards from "../Cards";
import MainSection from "../MainSection";
import Slider from "../Slider";
import Footer from "../Footer";
import Map from "../Map.js";
import Drawer from "react-modern-drawer";
import "./Home.css";

import MapImg from "../../../images_rome/Map.png";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <MainSection />
      <div className={`sticky-img ${isSticky ? "sticky" : ""}`}>
        <img src={MapImg} onClick={toggleDrawer} alt="Obrazek" />
        <div className="map-label" onClick={toggleDrawer}>
          Mapa
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
        size={1000}
        vw
        enableOverlay={true}
      >
        <Map></Map>
        <div>Hello World</div>
      </Drawer>
      <Cards />
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
