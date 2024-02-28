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
            <Link to="http://our2worlds.pl/Forum/forumdisplay.php?fid=52">
              Jak zacząć
            </Link>
            <Link to="http://our2worlds.pl/Forum/forumdisplay.php?fid=52">
              Początek
            </Link>
            <Link to="http://our2worlds.pl/Forum/forumdisplay.php?fid=74">
              Historia
            </Link>
            <Link to="http://our2worlds.pl/Forum/forumdisplay.php?fid=6">
              Bohaterowie
            </Link>
            <Link to="http://our2worlds.pl/Forum/forumdisplay.php?fid=52">
              Zasady
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Napisz do nas</h2>
            <Link to="http://our2worlds.pl/Forum/index.php">Kontakt</Link>
            <Link to="http://our2worlds.pl/Forum/index.php">Wsparcie</Link>
            <Link to="http://our2worlds.pl/Forum/index.php">Discord</Link>
            <Link to="http://our2worlds.pl/Forum/index.php">Forum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
