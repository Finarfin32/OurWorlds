// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

import React from "react";
import Navbar from "../components/Shared/Navbar";
import "../App.css";
import Home from "../components/Rome/pages/Home";

export default function Rome() {
  return (
    <div>
      <Navbar />
      <Home />
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
