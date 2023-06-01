import React from "react";
import "../../App.css";
import { Button } from "../Shared/Button";
import "./MainSection.css";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div className="main-container-chronicles">
      <h1>PRZYGODA CZEKA</h1>
      <p>Na co czekasz?</p>
      <div className="main-btns">
        <Link to="http://ourworlds.pl/Forum/#49">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href="http://ourworlds.pl/Forum/showthread.php?tid=121"
          >
            ZACZNIJ JUŻ DZIŚ
          </Button>
        </Link>
        <Link to="http://ourworlds.pl/Forum/#49">
          <Button
            className="btns hero-btns "
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("test")}
          >
            SPRAWDŹ FORUM
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainSection;
