import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-text">
        <p className="footer-text-heading">Bądź na bieżąco</p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>O nas</h2>
            <Link to="/sign-up">Jak zacząć</Link>
            <Link to="/">Początek</Link>
            <Link to="/">Historia</Link>
            <Link to="/">Bohaterowie</Link>
            <Link to="/">Zasady</Link>
          </div>
          <div class="footer-link-items">
            <h2>Napisz do nas</h2>
            <Link to="/">Kontakt</Link>
            <Link to="/">Wsparcie</Link>
            <Link to="/">Discord</Link>
            <Link to="/">Forum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
