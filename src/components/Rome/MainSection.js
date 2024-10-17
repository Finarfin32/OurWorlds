import React from "react";
import "../../App.css";
import { ButtonToForum } from "../Shared/Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-container">
      <h1>PRZYGODA CZEKA</h1>
      <p>Na co czekasz?</p>
      <div className="main-btns">
        <ButtonToForum
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ZACZNIJ JUŻ DZIŚ
        </ButtonToForum>

        <ButtonToForum
          className="btns hero-btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          SPRAWDŹ FORUM
        </ButtonToForum>
      </div>
    </div>
  );
}

export default MainSection;
