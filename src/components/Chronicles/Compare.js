import React, { useCallback } from "react";
import "./Compare.css";
import world1 from "../../images_chronicles/world1.jpg";
import world2 from "../../images_chronicles/world2.jpg";
import war1 from "../../images_chronicles/war1.jpg";
import war2 from "../../images_chronicles/war2.jpg";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

/** With Customised `handle`. */
export const Compare = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <div className="Compare-box">
      <div className="Compare-1">
        <ReactCompareSlider
          {...props}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: undefined,
                background: "white",
                border: 0,
                color: "#333",
              }}
            />
          }
          itemOne={<ReactCompareSliderImage src={world1} alt="World one" />}
          itemTwo={<ReactCompareSliderImage src={world2} alt="World two" />}
          onPositionChange={handlePositionChange}
          style={{
            display: "flex",
            width: "100%",
            height: "35vh",
            ...style,
          }}
        />
        <h2>PAŃSTWA</h2>
        <p>
          Przemierzając różne tereny w grze, możesz poznać różnorodne państwa i
          kultury. Możesz wcielić się w rycerza, który będzie walczył o honor i
          chwałę swego królestwa, a także w dyplomatę, który będzie zabiegał o
          sojusze i pokojowe rozwiązania konfliktów. Odwiedzając różne państwa,
          możesz odkrywać tajemnice zamków i pałaców, poznawać ich historię oraz
          walczyć z wrogami. Twoje działania wpłyną na przebieg historii i
          kształtowanie się stosunków między państwami, a Ty staniesz się
          bohaterem lub zdrajcą w oczach ludzi.
        </p>
      </div>
      <div className="Compare-2">
        <ReactCompareSlider
          {...props}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                backdropFilter: undefined,
                background: "white",
                border: 0,
                color: "#333",
              }}
            />
          }
          itemOne={<ReactCompareSliderImage src={war1} alt="War one" />}
          itemTwo={<ReactCompareSliderImage src={war2} alt="War two" />}
          onPositionChange={handlePositionChange}
          style={{
            display: "flex",
            width: "100%",
            height: "35vh",
            ...style,
          }}
        />
        <h2>LOKACJE</h2>
        <p>
          Każda z wyzwolonych przez Ciebie lokacji staje się bezpiecznym azylem
          dla ludzi, którzy tam mieszkają. Możesz pokonywać niebezpieczeństwa i
          wyzwalać miasta, wioski oraz zamki spod niegodziwości. Twoje czyny
          będą zapisane w historii i staną się inspiracją dla innych graczy do
          walki ze złem oraz odbudowy zniszczonych miejscowości. Wcielając się w
          postać, poznasz różne kultury, zwyczaje i historię tego fascynującego
          okresu, a wszystko to poprzez emocjonującą grę i interakcję z innymi
          graczami.
        </p>
      </div>
    </div>
  );
};
