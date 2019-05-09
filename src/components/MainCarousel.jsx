import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './MainCarousel.css'

export default class MainCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/ceramicCa1.jpg)',}}>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/ceramicCa2.jpg)',}}>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-image-container" style={{backgroundImage: 'url(images/ceramicCa3.jpg)',}}>

                    
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>   
            </Carousel>
        )
    }
}
    