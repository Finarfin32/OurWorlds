import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img_1 from "../../images_chronicles/img_1.jpg";
import img_2 from "../../images_chronicles/img_2.jpg";
import img_3 from "../../images_chronicles/img_3.jpg";
import img_4 from "../../images_chronicles/img_4.jpg";
function Cards() {
  return (
    <div className="cards">
      <h1>Test</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img_1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="Test1"
              path="/"
            />
            <CardItem
              src={img_2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="Test2"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img_3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="Test3"
              path="/"
            />
            <CardItem
              src={img_4}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="Test4"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
