import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div className="back">
            <FaArrowLeft /> Powrót
          </div>
        </Link>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            OurWorlds
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon">
            <i className="fas fa-times fas fa-bars" />
          </div>
          <ul className="nav-menu active">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Start
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Discord
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Forum
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Poradnik
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
