import React, { Component } from 'react';
import { Jumbotron, Image, Button, Row, Col, Container } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import MainCarousel from './MainCarousel';
import Footer from './Footer';


export default class Home extends Component {
    render() {
        return (
            <div>
                <MainCarousel />
                <Jumbotron className="jumbotron-home">
                    <Container>
                        <Row className="">
                            <Col xs={12} sm={6} className="home-column-1">
                                <Image src="images/Roswitha2web.jpg" />
                            </Col>
                            <Col xs={12} sm={6} className="home-column-2">
                                <h3>About Me</h3>
                                <p>In this world of change and distraction, the quality that I strive for in my work is a quiet simplicity. Making pots is a ritual - a celebration of the physical nature of being, and a renewal of life's energy, unfolding through the process of making. The adventure is in the pursuit. </p>
                                <Link to="/about">
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Col>
                        </Row>
                        
                    </Container>    
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/category1.jpg" />
                        <Link to="/shop1">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/category2.jpg" />
                        <Link to="/shop1">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/category3.jpg" />
                        <Link to="/shop1">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                </Row>
                <Footer />
                
            </div>

        )
    }
}