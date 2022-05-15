import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import main_side1 from "./media/main_side1.png";
import main_side2 from "./media/main_side2.png";
import "./App.css";

function App() {
  return (
    <div className="row g-0">
      <div className="col-lg-6 img-shadow">
        <img src={main_side1} className="w-100" alt="..."></img>
      </div>
      <div className="col-lg-6 img-shadow">
        <img src={main_side2} className="w-100" alt="..."></img>
      </div>
      <Link to="/rome">Rzym</Link> | <Link to="/chronicles">Kroniki</Link>
    </div>
  );
}

export default App;
