
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import ima1 from '../../assets/s23-ultra.webp'
import ima2 from '../../assets/a14.webp'
import ima3 from '../../assets/a34.webp'
import ima4 from '../../assets/s23+.webp'
import './css/CarrouselCards.css'


function CarrouselCards() {
    return (
        <>
        <div className='pt-20 border-b-[1px] border-sky-600 w-3/4 m-auto'>
            <h2 className='text-3xl font-medium mb-2'> 
                3 cuotas sin interés
            </h2>
        </div>
        <div className='divContenedor w-[80%] m-auto overflow-x-hidden'>
            <MDBCarousel showControls showIndicators className=''>
                <MDBCarouselItem itemId={1} className='' >
                    <div className ="card-group d-flex gap-3 m-20">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima4} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                <div className ="card-group d-flex gap-3 m-20">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top " alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima4} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3} className=''>
                <div className ="card-group d-flex gap-3 m-20">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top " alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima4} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Batidora Electrolux Efficient HMA10</h5>
                                <p className ="card-text"><small className ="text-body-secondary">Electrolux</small></p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
            </MDBCarousel>
            </div>
        </>
    )
}

export default CarrouselCards
