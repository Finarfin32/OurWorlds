import React from "react";
import "../Shared/Cards.css";
import CardItem from "../Shared/CardItem";
import img_1 from "../../images_chronicles/img_1.jpg";
import img_2 from "../../images_chronicles/img_2.jpg";
import img_3 from "../../images_chronicles/img_3.jpg";
import img_4 from "../../images_chronicles/img_4.jpg";

import { useChroniclesContent } from "./ChroniclesContent";

function Cards() {
  const { CardChronicles1, CardChronicles2, CardChronicles3, CardChronicles4 } =
    useChroniclesContent();
  return (
    <div className="cards">
      <div className="text_bar2">
        <h1>Poznaj nasze historie</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img_1}
              text={CardChronicles1}
              label="czytaj więcej..."
              path="http://our2worlds.pl/Forum/showthread.php?tid=65"
            />
            <CardItem
              src={img_2}
              text={CardChronicles2}
              label="czytaj więcej..."
              path="http://our2worlds.pl/Forum/showthread.php?tid=68"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img_3}
              text={CardChronicles3}
              label="czytaj więcej..."
              path="http://our2worlds.pl/Forum/showthread.php?tid=70"
            />
            <CardItem
              src={img_4}
              text={CardChronicles4}
              label="czytaj więcej..."
              path="http://our2worlds.pl/Forum/showthread.php?tid=64"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
