import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import main_side1 from "./media/main_side1.png";
import main_side2 from "./media/main_side2.png";
import "./App.css";
import { OnClickDisplay } from "./OnClickDisplay";
import { Hover } from "./OnClickDisplay";
import { Hoverout } from "./OnClickDisplay";

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
          style={{ filter: "blur(0px)" }}
          className="col-lg-6 img-shadow"
          onClick={() => OnClickDisplay("side1", "button1", "text1")}
          onMouseOver={() => Hover("side1")}
          onMouseOut={() => Hoverout("side1")}
        >
          <img src={main_side1} className="w-100" alt="..."></img>
        </div>
        <div
          id="side2"
          style={{ filter: "blur(0px)" }}
          className="col-lg-6 img-shadow"
          onClick={() => OnClickDisplay("side2", "button2", "text2")}
          onMouseOver={() => Hover("side2")}
          onMouseOut={() => Hoverout("side2")}
        >
          <img src={main_side2} className="w-100" alt="..."></img>
        </div>
        <div style={{ clear: "both" }}></div>
        <span id="text1">
          Rozgrywka dzieje się w świecie fantasy, który technologicznie,
          porównując do naszego, <br />
          stoi gdzieś w granicach XIII i XIV wieku. Świat ten jest brutalny i
          nieobliczalny. <br />
          Ludzie w potrzebie nie zostaną uratowani, misje będą porzucane i
          bohaterowie <br />
          będą umierać, a gdy umrą, pozostaną martwi na zawsze. Rozgrywka będzie
          od ciebie dużo <br />
          wymagać. Jak daleko uda ci się zajść? Jak wiele zaryzykujesz podczas
          swych wypraw, by osiągnąć
          <br />
          swój cel? Ile jesteś w stanie poświęcić, by uratować życie swojej
          postaci?
          <br />
          <br />
          Obierz swoją drogę, stwórz własną postać, pokieruj nią ku chwale bądź
          kompletnej
          <br />
          deprawacji! Wspieraj władze Diuka bądź staraj się ją obalić. Handluj,
          walcz, rozmawiaj,
          <br />
          kochaj, przyjaźnij się - bądź politykiem, żołnierzem, najemnikiem,
          kowalem, rolnikiem,
          <br />
          złodziejem, kapłanem. Stwórz własną historię, przeżyj ją, bądź kim
          chcesz!
          <br />
          <a id="link1" href="http://ourworlds.pl/Forum/#49">
            <input
              type="button"
              id="button1"
              value="WYBIERAM KRONIKI ARBORGU"
            />
          </a>
        </span>
        <span id="text2">
          Jest rok 225. Cesarstwo rzymskie przeżywa kryzys. Najpotężniejsze
          niebezpieczeństwo <br />
          nadciąga ze strony Persji, zagrażając odciętemu od świata przyczółkowi
          cesarstwa,
          <br />
          cytadeli Dura Europos. Obronę dzielnego miasta ma zorganizować wódz o
          znaczącym
          <br />
          imieniu Tiberius. <br />
          <br />
          Urodzony na terenach barbarzyńców, traktowany z pogardą
          <br />
          przez podległych mu patrycjuszowskich dowódców, musi stawić czoło nie
          tylko armii
          <br />
          perskiej, ale też zdrajcom w obrębie murów. W przedstawionej historii
          <br />
          wielomiesięcznego oblężenia miasta wplata się dramat człowieka do
          końca
          <br />
          wypełniającego samobójczą misję, Imperium w Płomieniach, jest
          opowieścią o
          <br />
          straceńczej odwadze, zdradzie, przede wszystkim jednak - bezpardonowej
          walce.
          <br />
          <a id="link2" href="http://ourworlds.pl/Forum/#1">
            <input
              type="button"
              id="button2"
              value="WYBIERAM IMPERIUM W PŁOMIENIACH"
            />
          </a>
        </span>
        <Link to="/rome">Rzym</Link> | <Link to="/chronicles">Kroniki</Link>
      </div>
    </div>
  );
}

export default App;
