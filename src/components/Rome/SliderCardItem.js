import React from "react";
import { Link } from "react-router-dom";

function SliderCardItem(props) {
  return (
    <>
      <li className="slider_cards__item">
        <Link className="slider_cards__item__link" to={props.path}>
          <figure
            className="slider_cards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="slider_cards__item__img"
              alt="Test"
              src={props.src}
            />
          </figure>
          <div className="slider_cards__item__info">
            <h5 className="slider_cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SliderCardItem;
