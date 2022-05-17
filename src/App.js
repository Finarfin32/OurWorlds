import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import main_side1 from "./media/main_side1.png";
import main_side2 from "./media/main_side2.png";
import "./App.css";
import OnClickDisplay from "./OnClickDisplay";
import Hover from "./OnClickDisplay";
import Hoverout from "./OnClickDisplay";

function App() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8" />
        <title>Ourworlds</title>
        <meta name="description" content="Roleplay forum" />
        <meta name="author" content="Finarfin" />
      </Helmet>

      <div className="row g-0">
        <div
          id="side1"
          className="col-lg-6 img-shadow"
          onClick={() => OnClickDisplay("side1", "button1", "text1")}
          onMouseOver={() => Hover("side1")}
          onMouseOut={() => Hoverout("side1")}
        >
          <img src={main_side1} className="w-100" alt="..."></img>
        </div>
        <div
          id="side2"
          className="col-lg-6 img-shadow"
          onClick={() => OnClickDisplay("side2", "button2", "text2")}
          onMouseOver={() => Hover("side2")}
          onMouseOut={() => Hoverout("side2")}
        >
          <img src={main_side2} className="w-100" alt="..."></img>
        </div>
        <Link to="/rome">Rzym</Link> | <Link to="/chronicles">Kroniki</Link>
      </div>
    </div>
  );
}

export default App;
