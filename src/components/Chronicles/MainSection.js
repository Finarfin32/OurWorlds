import React from "react";
import "../../App.css";
import { Button } from "../Shared/Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container-chronicles">
      <h1>PRZYGODA CZEKA</h1>
      <p>Na co czekasz?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ZACZNIJ JUŻ DZIŚ
        </Button>
        <Button
          className="btns hero-btns "
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("test")}
        >
          SPRAWDŹ FORUM
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
