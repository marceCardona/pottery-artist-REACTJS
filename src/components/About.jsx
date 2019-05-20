import React, { Component } from 'react';
import Footer from './Footer';
import { Container, Jumbotron, Row, Col, Button, Image } from 'react-bootstrap';




export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron-about">
                    <Container>
                        <Row className="">
                            <Col xs={12} sm={6} className="about-column-1">
                                <Image src="images/Roswitha2web.jpg" />
                            </Col>
                            <Col xs={12} sm={6} className="">
                            <h1>About the artist</h1>
                            <p>In this world of change and distraction, the quality that I strive for in my work is a quiet simplicity. Making pots is a ritual - a celebration of the physical nature of being, and a renewal of life's energy, unfolding through the process of making. The adventure is in the pursuit. </p>
                            </Col>
                        </Row>
                        <Row className="">
                            <Col xs={12} sm={6} className="">
                            <p>Using the language of wood-firing, I create a personal vocabulary portraying the Australian landscape to which I am greatly attracted. My form is influenced by Art Nouveau or Jugendstil, reflecting the other half of my heritage.</p>
                            <p>Techniques are informed by pottery from China, Korea, Japan and Germany</p>
                            <Button variant="primary">Download curriculum vitae</Button>
                            </Col>
                            <Col xs={12} sm={6} className="about-column-1">
                                <Image src="images/Roswitta1.jpg" />
                            </Col>
                           
                        </Row>
                        
                    </Container>    
                </Jumbotron>
                <Footer />
            </div>

        )
    }
}