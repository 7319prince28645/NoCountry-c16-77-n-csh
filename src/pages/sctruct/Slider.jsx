import datos from "../../lib/DatosBuscador";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../../pages/sctruct/css/swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../sctruct/css/CarrouselCards.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/Products.services";
import { CategoryService } from "../../services/Cateogory.services";
import { Link } from "react-router-dom";
function Slider({page}) {
  console.log(page);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await getProducts();
      const response2 = await CategoryService();
      setCategory(response2);
      console.log(response2);
      setProducts(response);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
          },
        }}
      >
        {products ? (
          products.slice(page).map((product) => (
            <SwiperSlide key={product.id} className="w-96">
              <Link to={`/Product/${category.find(item => item.id === product.categoryId)?.name}/${product.id}`}>
                <div className="card space-y-5 hover:scale-95 hover:transition hover:duration-500 h-96">
                  <div className="max-w-full max-h-full overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.id}
                      className="object-contain h-20 w-20"
                    />
                  </div>
                  <h2>{product.name}</h2>
                  <h3>{product.description}</h3>
                  <p className="text-2xl font-medium">${product.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </Swiper>
    </>
  );
}

export default Slider;
