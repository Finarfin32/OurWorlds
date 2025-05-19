import React from "react";
import "../Shared/Cards.css";
import CardItem from "../Shared/CardItem";
import img_1 from "../../images_rome/img_1.jpg";
import img_2 from "../../images_rome/img_2.jpg";
import img_3 from "../../images_rome/img_3.jpg";
import img_4 from "../../images_rome/img_4.jpg";
import "react-modern-drawer/dist/index.css";
import { useRomeContent } from "./RomeContent";

function Cards() {
  const { Card1, Card2, Card3, Card4 } = useRomeContent();
  return (
    <div className="cards">
      <div className="text_bar">
        <h1>Poznaj nasze historie</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img_1}
              text={Card1}
              label="czytaj więcej..."
              path="http://our3worlds.pl/forum/showthread.php?tid=10"
            />
            <CardItem
              src={img_2}
              text={Card2}
              label="czytaj więcej..."
              path="http://our3worlds.pl/forum/showthread.php?tid=12"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img_3}
              text={Card3}
              label="czytaj więcej..."
              path="http://our3worlds.pl/forum/showthread.php?tid=136"
            />
            <CardItem
              src={img_4}
              text={Card4}
              label="czytaj więcej..."
              path="http://our3worlds.pl/forum/showthread.php?tid=134"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
