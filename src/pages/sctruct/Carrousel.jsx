
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import ima1 from '../../assets/ima1.jpg'
import ima2 from '../../assets/ima2.jpg'
import ima3 from '../../assets/ima3.jpg'
import './css/carrousel.css'

export default function Carrousel() {
  return (
    <>

      <MDBCarousel className='contenedor ' showControls showIndicators>
        <MDBCarouselItem  itemId={1}>
          <div className=' cImagen'>
          <img src={ima1} className=' h-72  w-95' alt='...' />
          </div>
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem  itemId={2}>
          <div className=' cImagen' >
          <img src={ima2} className=' h-72 w-95' alt='...' />
          </div>
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem  itemId={3}>
          <div className='cImagen'>
          <img src={ima3} className=' h-72 w-95' alt='...' />
          </div>
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>


    </>

  );
}
