import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="back">
          <FaArrowLeft /> Powrót
        </Link>
        <div className="navbar-container">
          <Link
            to="http://our2worlds.pl/Forum/index.php"
            className="navbar-logo"
          >
            OurWorlds
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon">
            <i className="fas fa-times fas fa-bars" />
          </div>
          <ul className="nav-menu active">
            <li className="nav-item">
              <Link
                to="http://our2worlds.pl/Forum/forumdisplay.php?fid=52"
                className="nav-links"
              >
                Start
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="http://our2worlds.pl/Forum/index.php"
                className="nav-links"
              >
                Discord
              </Link>
            </li>
            <li className="nav-item">
              <Link to="http://our2worlds.pl/Forum/#49" className="nav-links">
                Forum
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="http://our2worlds.pl/Forum/forumdisplay.php?fid=52"
                className="nav-links"
              >
                Poradnik
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="http://our2worlds.pl/Forum/showthread.php?tid=7"
                className="nav-links"
              >
                Mapa
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
