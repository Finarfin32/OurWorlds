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
          // autoplay={{
          //   delay: 15000,
          //   disableOnInteraction: false,
          // }}
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
              text="Tiberius Sidonius Geta określany jest mianem osoby zamkniętej w sobie, nie dzieli się swoim życiem prywatnym praktycznie z nikim, potrafiącej zachować zimną krew w sytuacjach niebezpiecznych na polu bitwy czy w walce, ale mogącej w jednym momencie wpaść w szał i wyrządzić komuś poważną krzywdę. Jest szczery i mówi co ma namyśli chyba, że sytuacja wymaga od niego czegoś innego. Potrafi kpić ze wszystkiego dlatego jest dość nielubiany w wyższych sferach czy pośród innych dowódców jednocześnie wzbudza ich szacunek za swoją pewną postawę, umiejętności dowódcze, a także otwarty umysł i doświadczenie. Jest charyzmatyczny i lubiany przez podwładnych."
              label="czytaj więcej..."
              avatarname="Tiberius Sidonius Geta"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Rosie}
              text="Rosie nie należy do osób z złożoną i skomplikowaną osobowością. Przede wszystkim ta dziewczyna zawsze pozostaje sobą, niezależnie od sytuacji w jakiej się znalazła. Dla rodziny i przyjaciół jest miła, uprzejma i szczera oraz żartobliwa. Wie kiedy i na co może sobie pozwolić w ich obecności. Nie jest wulgarna i nie przeklina zbyt często, ale daleko jej jest do doskonałości i czasem coś się wymsknie pod wpływem stresu, a na niego odporna niestety nie jest. Nie pogardzi dobrym alkoholem.
              W kontaktach z obcymi ludźmi zachowuje ostrożność, mówi niewiele i potrafi być podejrzliwa. "
              label="czytaj więcej..."
              avatarname="Rosie Evie Braverose"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Wercyr}
              text="Gaius jest osobą trzeźwo myślącą. Jako żołnierz nie tchórzy w obliczu zagrożenia, ale nie szuka też głupio śmierci. Słucha lojalnie rozkazów. Zdarza mu się jednak dokonać na polu bitwy czynów bohaterskich, ryzykownych. Zwykle jest otwarty, słucha i dzieli się radami. Jest spostrzegawczy. Wśród towarzyszy broni cieszy się jako takim szacunkiem, uważany jest za kogoś na kim można polegać. Czasami wśród towarzyszy przeklina i to mocno, szczególnie gdy słyszy jakieś bzdury lub gdy ktoś próbuje go oszukać."
              label="czytaj więcej..."
              avatarname="Gaius Lucius Dentatus"
              path="/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCardItem
              src={img_Roxane}
              text="Życie nauczyło ją, by nigdy się nie poddawać, kiedy wyznaczy sobie cel, zrobi wszystko, by go osiągnąć. Jest przy tym dość pogodną i optymistycznie nastawioną osobą. Raczej jest zrównoważona i spokojna, choć to może drastycznie się zmienić, kiedy ktoś stanie jej na drodze. Cierpliwa, ale nienawidzi czekać bezczynnie, nie znosi też sytuacji, w których nie może sama o sobie decydować. Od najmłodszych lat nie lubiła mówić dużo o sobie. Bez trudu za to potrafiła wyciągnąć z innych sporo interesujących faktów z ich życia. Nie uważała tego za talent, nigdy też nie starała się rozwijać tej zdolności. Przychodziło jej to naturalnie.
              "
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
