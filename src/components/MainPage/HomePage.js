import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import main_side1 from "../../media/main_side1.png";
import main_side2 from "../../media/main_side2.png";
import chroniclesSound from "../../sound/chroniclesSound.mp3";
import romeSound from "../../sound/romeSound.mp3";
import "../../App.css";
import "../../MediaQueries.css";
import { OnClickDisplay, Hover, Hoverout } from "../../utils";

function HomePage() {
  return (
    <div className="application">
      <div className="row g-0">
        <div
          id="side1"
          style={{ filter: "blur(0px)" }}
          className="col-lg-6 img-shadow"
          onClick={() =>
            OnClickDisplay("background1", "button1", "text1", "chroniclesSound")
          }
          onMouseOver={() => Hover("side1")}
          onMouseOut={() => Hoverout("side1")}
        >
          <img
            src={main_side1}
            id="background1"
            className="w-100"
            alt="..."
          ></img>
          <span id="text1">
            Rozgrywka dzieje się w świecie fantasy, który technologicznie,
            porównując do naszego, stoi gdzieś w granicach XIII i XIV wieku.
            Świat ten jest brutalny i nieobliczalny. Ludzie w potrzebie nie
            zostaną uratowani, misje będą porzucane i bohaterowie będą umierać,
            a gdy umrą, pozostaną martwi na zawsze. Rozgrywka będzie od ciebie
            dużo wymagać. Jak daleko uda ci się zajść? Jak wiele zaryzykujesz
            podczas swych wypraw, by osiągnąć swój cel? Ile jesteś w stanie
            poświęcić, by uratować życie swojej postaci?
            <br />
            <br />
            Obierz swoją drogę, stwórz własną postać, pokieruj nią ku chwale
            bądź kompletnej deprawacji! Wspieraj władze Diuka bądź staraj się ją
            obalić. Handluj, walcz, rozmawiaj, kochaj, przyjaźnij się - bądź
            politykiem, żołnierzem, najemnikiem, kowalem, rolnikiem, złodziejem,
            kapłanem. Stwórz własną historię, przeżyj ją, bądź kim chcesz!
            <br />
            <Link id="link1" to="/chronicles">
              <input
                type="button"
                id="button1"
                value="WYBIERAM KRONIKI ARBORGU"
              />
            </Link>
          </span>
        </div>
        <div
          id="side2"
          style={{ filter: "blur(0px)" }}
          className="col-lg-6 img-shadow"
          onClick={() =>
            OnClickDisplay("background2", "button2", "text2", "romeSound")
          }
          onMouseOver={() => Hover("side2")}
          onMouseOut={() => Hoverout("side2")}
        >
          <img
            src={main_side2}
            id="background2"
            className="w-100"
            alt="..."
          ></img>
          <span id="text2">
            Jest rok 225. Cesarstwo rzymskie przeżywa kryzys. Najpotężniejsze
            niebezpieczeństwo nadciąga ze strony Persji, zagrażając odciętemu od
            świata przyczółkowi cesarstwa, cytadeli Dura Europos. Obronę
            dzielnego miasta ma zorganizować wódz o znaczącym imieniu Tiberius.
            <br />
            <br />
            Urodzony na terenach barbarzyńców, traktowany z pogardą przez
            podległych mu patrycjuszowskich dowódców, musi stawić czoło nie
            tylko armii perskiej, ale też zdrajcom w obrębie murów. W
            przedstawionej historii wielomiesięcznego oblężenia miasta wplata
            się dramat człowieka do końca wypełniającego samobójczą misję,
            Imperium w Płomieniach, jest opowieścią o straceńczej odwadze,
            zdradzie, przede wszystkim jednak - bezpardonowej walce.
            <br />
            <Link id="link2" to="/rome">
              <input
                type="button"
                id="button2"
                value="WYBIERAM IMPERIUM W PŁOMIENIACH"
              />
            </Link>
          </span>
        </div>
        <audio id="chroniclesSound" src={chroniclesSound} />
        <audio id="romeSound" src={romeSound} />
        {/* href="http://ourworlds.pl/Forum/#1" */}
      </div>
    </div>
  );
}

export default HomePage;
