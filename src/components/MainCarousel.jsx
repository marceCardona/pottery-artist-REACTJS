import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'

export default class MainCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel1.jpg)',}}>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel2.jpg)',}}>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/carousel3.jpg)',}}>

                    
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>   
            </Carousel>
        )
    }
}
    