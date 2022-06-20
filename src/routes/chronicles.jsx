// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";

import React from "react";
import Navbar from "../components/Chronicles/Navbar";
import "../App.css";
import Home from "../components/Chronicles/pages/Home";

export default function Chronicles() {
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
    //   <h2>Kroniki</h2>
    // </main>
  );
}
