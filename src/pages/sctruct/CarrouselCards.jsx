import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import ima1 from '../../assets/ima1.jpg'
import ima2 from '../../assets/ima2.jpg'
import ima3 from '../../assets/ima3.jpg'
import './css/CarrouselCards.css'


function CarrouselCards() {
    return (
        <>
        <div className='divContenedor m-10'>
            <MDBCarousel showControls showIndicators className="m-4 ">
                <MDBCarouselItem itemId={1}className='' >
                    <div className ="card-group d-flex gap-4 m-2">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top " alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                <div className ="card-group d-flex gap-4 m-2">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top " alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3} className=''>
                <div className ="card-group d-flex gap-4 m-2">
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top " alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border ">
                            <img src={ima2} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima3} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className ="card m-2 border">
                            <img src={ima1} className ="card-img-top" alt="..." />
                            <div className ="card-body">
                                <h5 className ="card-title">Card title</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
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
