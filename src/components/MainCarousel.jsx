import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

export default class MainCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel0.jpg)',}}>
                    <Carousel.Caption className="first-caption">
                        <p className="firstText">Exhibition of</p>
                        <p className="carousel-title first">FINE POTTERY</p>
                        <p className="firstText">By Roswitha Wulff</p>
                        <p className="firstText">19 - 23 july, 2019</p>
                        <a href="brochureRoswithaWulff.pdf"><Button variant="outline-light" size="lg" className="button-first">Download Brochure</Button></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel1.jpg)',}}>
                    <Carousel.Caption>
                         <p className="carousel-title">Pottery Artist based in Sydney</p>
                        <Link to="/Vase">
                            <Button variant="outline-light" size="lg">View products</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel2.jpg)',}}>
                    <Carousel.Caption>
                        <p className="carousel-title">Table-ware</p>
                        <Link to="/Tableware">
                            <Button variant="outline-light" size="lg">View products</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel3.jpg)',}}>
                    <Carousel.Caption>
                        <p className="carousel-title">Wall pieces</p>
                        <Link to="/Wallpiece">
                            <Button variant="outline-light" size="lg">View products</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>   
            </Carousel>
        )
    }
}
    