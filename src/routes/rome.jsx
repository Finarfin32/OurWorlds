// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Home from "../components/pages/Home";
import Description2 from "../components/pages/Description2";
import Description1 from "../components/pages/Description1";

export default function Rome() {
  return (
    <div>
      <Navbar />
      <Home />
      <Description1 />
      <Description2 />
    </div>

    // <main style={{ padding: "1rem 0" }}>
    //   <Link to="/">
    //     <h2>
    //       <FaArrowLeft /> Powrót na stronę główną
    //     </h2>
    //   </Link>
    //   <h2>Rzym</h2>
    // </main>
  );
}
