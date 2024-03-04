import datos from "../../lib/DatosBuscador";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../pages/sctruct/css/swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import '../sctruct/css/CarrouselCards.css'

function Slider2() {

  const productosAleatorios = datos.sort(() => Math.random() - 0.5);
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
      {productosAleatorios.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="card space-y-5 hover:scale-95 hover:transition hover:duration-500">
            <img src={product.img} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <h3>{product.modelo}</h3>
            <p className="text-2xl font-medium">${product.precio}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default Slider2