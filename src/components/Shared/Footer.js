import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text-heading">Bądź na bieżąco</p>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nas</h2>
            <a
              href="http://our3worlds.pl/Forum/forumdisplay.php?fid=52"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jak zacząć
            </a>
            <a
              href="http://our3worlds.pl/Forum/forumdisplay.php?fid=52"
              target="_blank"
              rel="noopener noreferrer"
            >
              Początek
            </a>
            <a
              href="http://our3worlds.pl/Forum/forumdisplay.php?fid=74"
              target="_blank"
              rel="noopener noreferrer"
            >
              Historia
            </a>
            <a
              href="http://our3worlds.pl/Forum/forumdisplay.php?fid=6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bohaterowie
            </a>
            <a
              href="http://our3worlds.pl/Forum/forumdisplay.php?fid=52"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zasady
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Napisz do nas</h2>
            <a
              href="http://our3worlds.pl/Forum/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kontakt
            </a>
            <a
              href="http://our3worlds.pl/Forum/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wsparcie
            </a>
            <a
              href="http://our3worlds.pl/Forum/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              href="http://our3worlds.pl/Forum/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
