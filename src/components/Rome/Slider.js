import React from "react";
import "../../App.css";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import "./Cards.css";
import SliderCardItem from "./SliderCardItem";
import img_Tiberius from "../../images_rome/img_Tiberius.png";
import img_Rosie from "../../images_rome/img_Rosie.jpg";
import img_Wercyr from "../../images_rome/img_Wercyr.jpg";
import img_Roxane from "../../images_rome/img_Roxane.jpg";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
function Slider() {
  return (
    <>
      <div className="slider-container">
        <Swiper
          navigation={true}
          effect={"cards"}
          modules={[Navigation, Autoplay, EffectCards]}
          spaceBetween={300}
          centeredSlides={true}
          // slidesPerView={3}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <SliderCardItem
              src={img_Tiberius}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="czytaj więcej..."
              avatarname="Tiberius Sidonius Geta"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Rosie}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="czytaj więcej..."
              avatarname="Rosie Evie Braverose"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Wercyr}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="czytaj więcej..."
              avatarname="Gaius Lucius Dentatus"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Roxane}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie sem ut mattis fringilla. Duis posuere ut nisi at bibendum. Fusce hendrerit massa sed nisl lobortis, sit amet vestibulum metus vulputate. Pellentesque pulvinar dui arcu, ut efficitur elit porttitor nec. Aliquam eleifend ligula mattis arcu pretium tincidunt eleifend ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ultrices nunc sit amet orci bibendum, ac viverra mi blandit. "
              label="czytaj więcej..."
              avatarname="Roxane Sophie Evening"
              path="/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
