import React from "react";
import "../../App.css";
import { Button } from "../Shared/Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container">
      <h1>PRZYGODA CZEKA</h1>
      <p>Na co czekasz?</p>
      <div className="main-btns">
        <a
          href="http://our2worlds.pl/Forum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            ZACZNIJ JUŻ DZIŚ
          </Button>
        </a>
        <a
          href="http://our2worlds.pl/Forum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="btns hero-btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            //onClick={() => console.log("test")}
          >
            SPRAWDŹ FORUM
          </Button>
        </a>
      </div>
    </div>
  );
}

export default MainSection;
