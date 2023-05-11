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

import { useRomeContent } from "./RomeContent";

function Slider() {
  const { Description1, Description2, Description3, Description4 } =
    useRomeContent();
  return (
    <>
      <div className="slider-container">
        <div className="text_bar">
          <h1>Ważne postacie</h1>
        </div>

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
              text={Description1}
              label="czytaj więcej..."
              avatarname="Tiberius Sidonius Geta"
              path="http://ourworlds.pl/Forum/showthread.php?tid=29"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Rosie}
              text={Description2}
              label="czytaj więcej..."
              avatarname="Rosie Evie Braverose"
              path="http://ourworlds.pl/Forum/showthread.php?tid=31"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Wercyr}
              text={Description3}
              avatarname="Gaius Lucius Dentatus"
              path="http://ourworlds.pl/Forum/showthread.php?tid=32"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Roxane}
              text={Description4}
              label="czytaj więcej..."
              avatarname="Roxane Sophie Evening"
              path="http://ourworlds.pl/Forum/showthread.php?tid=33"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
