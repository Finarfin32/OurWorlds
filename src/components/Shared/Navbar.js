import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="back">
          <FaArrowLeft /> Powrót
        </Link>
        <div className="navbar-container">
          <a
            href="http://our3worlds.pl/forum/index.php"
            className="navbar-logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            OurWorlds
            <i className="fab fa-typo3" />
          </a>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </div>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="http://our3worlds.pl/forum/forumdisplay.php?fid=52"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://our3worlds.pl/forum/index.php"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://our3worlds.pl/forum/#49"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forum
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://our3worlds.pl/forum/forumdisplay.php?fid=52"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poradnik
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://our3worlds.pl/forum/showthread.php?tid=7"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mapa
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
