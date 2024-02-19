

import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import ima1 from '../../assets/banner-1.webp'
import ima2 from '../../assets/banner-2.webp'
import ima3 from '../../assets/banner-3.webp'
import './css/carrousel.css'

export default function Carrousel() {
  return (
    <>

      <MDBCarousel className='contenedor ' showControls showIndicators>
        <MDBCarouselItem  itemId={1}>
          <div className='cImagen'>
            <a href="">
              <img src={ima1} alt='...' />
            </a>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem  itemId={2}>
          <div className='cImagen' >
            <a href="#">
              <img src={ima2} alt='...' />
            </a>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem  itemId={3}>
          <div className='cImagen'>
            <a href="#">
              <img src={ima3} alt='...' />
            </a>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>


    </>

  );
}
