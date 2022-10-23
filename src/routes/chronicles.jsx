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
  );
}
