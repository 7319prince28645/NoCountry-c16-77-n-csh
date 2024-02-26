import Datos from "../../lib/datos";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../../pages/sctruct/css/swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ima4 from "../../assets/notebook-samsung.webp";
import '../sctruct/css/CarrouselCards.css'

function Slider2() {
  return (
    <>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper p-20"
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }}
      
    >
      {Datos.Notebooks.map((Notebook, index) => (
        <SwiperSlide key={index}>
          <div className="card space-y-5 hover:scale-95 hover:transition hover:duration-500">
            <img src={ima4} alt={Notebook.descripcion} />
            <h2>{Notebook.descripcion}</h2>
            <p className="text-2xl font-medium">${Notebook.precios[0]}</p>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default Slider2