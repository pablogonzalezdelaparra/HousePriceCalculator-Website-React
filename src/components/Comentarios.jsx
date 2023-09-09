import React, { Fragment, useState, useEffect, useContext } from "react";
import ComentariosStyle from "../styles/Comentarios.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { toast } from "react-toastify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { TextareaField } from "evergreen-ui";
import { getComments, createComment } from "../services/commentService";
import { UserContext } from "../pages/RoutesPage";

function Comentarios() {
  const [commentsList, setCommentsList] = useState([]);
  const [comentario, setComment] = useState("");
  const [comentsLoaded, setComentsLoaded] = useState(false);
  const {userData} = useContext(UserContext);

  useEffect(() => {
    if (!comentsLoaded){
      toast.promise(
        getComments().then((res) => {
          setCommentsList(res);
        })
        , {
          pending: "Cargando comentarios...",
          success: "Comentarios cargados",
          error: "Error al cargar comentarios",
        }, {
          pauseOnFocusLoss: false,
          autoClose: 3000,
          pauseOnHover: false,
      });
      setComentsLoaded(true);
    }
  }, []);

  const handleCreateComment = () => {
    toast.promise(
      async () => { 
        const response = await createComment(comentario);
        if (response !== "ok") {
          throw new Error("Error al registrar comentario");
        }
        getComments().then((res) => {
          setCommentsList(res);
        });
      },
      {
        pending: "Registrando comentario...",
        success: "Comentario registrado",
        error: "Inicia sesión para comentar",
      }, {
        pauseOnFocusLoss: false,
        autoClose: 3000,
        pauseOnHover: false,
      }
    );
  };



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
            {
              commentsList.map((comment) => {
                return (
                  <SwiperSlide>
                    <div className="comment-item">
                      <div className="comment-item-header">
                        <div className="profile-image"></div>
                        <p className="name">{comment.name +" "+ comment.lastName}</p>
                      </div>
                      <div className="comment-item-body">
                        <p className="comment">
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
        <div className="comentarios-form">
          <div className="form-container">
            <div className="comentarios-form-header">
              <div className="profile-image"></div>
              <p className="name">{userData !== null ? userData?.name + " " + userData.lastName : "Usuario"}</p>
            </div>
            <TextareaField
              className="comentarios-textarea"
              label="Comparte tu experiencia...."
              placeholder={userData === null ? "Inicia sesión para comentar" : "Lo que más me gustó fue..."}
              width="100%"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              disabled={userData === null}
            />
            <div className="comentarios-button" onClick={handleCreateComment}>
              <span>Enviar</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Comentarios;
