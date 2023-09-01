import React, { Fragment } from "react";
import ComentariosStyle from "../styles/Comentarios.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { TextareaField } from "evergreen-ui";

function Comentarios() {
  return (
    <Fragment>
      <div className="comentarios-main-container">
        <div className="comentarios-title-container">
          <p>Comparte tu experiencia</p>
        </div>
        <div className="comentarios-swipper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="comment-item">
                <div className="comment-item-header">
                  <div className="profile-image"></div>
                  <p className="name">Usuario</p>
                </div>
                <div className="comment-item-body">
                  <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-item">
                <div className="comment-item-header">
                  <div className="profile-image"></div>
                  <p className="name">Usuario</p>
                </div>
                <div className="comment-item-body">
                  <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-item">
                <div className="comment-item-header">
                  <div className="profile-image"></div>
                  <p className="name">Usuario</p>
                </div>
                <div className="comment-item-body">
                  <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-item">
                <div className="comment-item-header">
                  <div className="profile-image"></div>
                  <p className="name">Usuario</p>
                </div>
                <div className="comment-item-body">
                  <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comment-item">
                <div className="comment-item-header">
                  <div className="profile-image"></div>
                  <p className="name">Usuario</p>
                </div>
                <div className="comment-item-body">
                  <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="comentarios-form">
          <div className="form-container">
            <div className="comentarios-form-header">
              <div className="profile-image"></div>
              <p className="name">Usuario</p>
            </div>
            <TextareaField
              label="Comparte tu experiencia...."
              placeholder="Lo que más me gustó fue..."
              width="100%"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Comentarios;
