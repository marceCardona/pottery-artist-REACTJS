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
                                <Image src="images/miniImg.jpg" roundedCircle />
                            </Col>
                            <Col xs={12} sm={6} className="">
                                <h3>About Me</h3>
                                <p>Qui ea aeterno vituperatoribus, has id mucius lucilius. Ne cum tritani expetendis. Mei te noluisse voluptua, labore perpetua ad pro, nullam essent mei ne. Mel ea stet labore adipiscing, soluta quidam ceteros nec ut, mei cu labitur eripuit epicurei. Eum impetus concludaturque eu, ius ex idque clita, postea voluptatum suscipiantur cu nam. Ei qui idque convenire adipiscing, in sed elit aliquam pertinax, quo ei patrioque torquatos accommodare.</p>
                            </Col>
                        </Row>
                        <Link to="/about">
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Container>    
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/matera1.jpg" />
                        <Link to="/shop">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/matera1.jpg" />
                        <Link to="/shop">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={4} className="trio-image-wrapper" fluid>
                        <Image className="image-trio-home" src="images/matera1.jpg" />
                        <Link to="/shop">
                            <Button className="button-effect" variant="dark">Shop Now</Button>
                        </Link>
                    </Col>
                </Row>
                <Footer />
                
            </div>

        )
    }
}