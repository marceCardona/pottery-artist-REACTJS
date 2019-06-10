import React, { Component } from 'react';
import Footer from './Footer';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Home.css';

export default class About extends Component {
    render() {
        return (
            <div>
                    <Container className="container-about">
                
                        <Row>
                            <Col xs={12} sm={6} md={8} className="about-column-1">
                                <Image className="artist-img" src="images/RoswithaProfile.jpg" />
                            </Col>
                            <Col xs={12} sm={6} md={4} className="about-text">
                                <h1>Roswitha Wulff</h1>
                                <p>In this world of change and distraction, the quality that I strive for in my work is a quiet simplicity. Making pots is a ritual - a celebration of the physical nature of being, and a renewal of life's energy, unfolding through the process of making. The adventure is in the pursuit. </p>
                                <p>Using the language of wood-firing, I create a personal vocabulary portraying the Australian landscape to which I am greatly attracted. My form is influenced by Art Nouveau or Jugendstil, reflecting the other half of my heritage.</p>
                                <p>Techniques are informed by pottery from China, Korea, Japan and Germany</p>
                                <a href="RoswithaWulffCV.docx"><Button variant="dark">Download curriculum vitae</Button></a>
                            </Col>
                        </Row>

                        <h2 className="abouth2">Articles</h2>
                        <Row className="">
                            <Col xs={12} sm={6} md={3} className="article"> 
                            <Image className="articles-img" src="images/woodFiring2.jpg" />
                            <a href="What'sSoSpecialAboutAWood-firing.docx"><Button className="button-effect-about" variant="dark">Download article</Button></a>
                            <h3 className="abouth3">What's so spacial about wood firing?</h3>
                            <p>"I am attracted to the wood-fired pot by the total carelessness of how each mark is made, as if delivered by chance."</p>

                    
                            </Col>
                            <Col xs={12} sm={6} md={3} className="article">
                            <Image className="articles-img" src="images/rwEducation.jpg" />
                            <a href="Coming from Tradition.docx"><Button className="button-effect-about" variant="dark">Download article</Button></a>
                            <h3 className="abouth3">Coming from tradition</h3>
                            <p>"I have a link with the craft traditions of my birthplace Persia, through my father's work in documenting the crafts of the Middle East, and my own explorations in this region. Complementing this, are the European traditions of my German parents. And to round it all off, through my and travels I have assimilated the traditions of China and Japan."</p>
                                
                            </Col>
                            <Col xs={12} sm={6} md={3} className="article">   
                            <Image className="articles-img" src="images/woodFiring1.jpg" />
                            <a href="The aesthetics of wood firing.docx"><Button className="button-effect-about" variant="dark">Download article</Button></a>
                            <h3 className="abouth3">The aesthetics of wood firing</h3>
                            <p>"Unaware at the time we were embracing a very important aspect of aesthetics, an aspect often ignored in our western culture, the tactile importance of the work of art."</p>                       
                    
                            </Col>
                            <Col xs={12} sm={6} md={3} className="article">
                            <Image className="articles-img" src="images/ceramicEducation.jpg" />
                            <a href="CERAMIC EDUCATION AT THE NATIONAL ART SCHOOL, EAST SYDNEY.docx"><Button className="button-effect-about" variant="dark">Download article</Button></a>
                            <h3 className="abouth3">Ceramic Education</h3>
                            <p>Lecture given at the 5th National Ceramics Conference in Sydney - 1988</p>
                                
                            </Col>
                           
                        </Row>
                        
                    </Container>    
                <Footer />
            </div>

        )
    }
}