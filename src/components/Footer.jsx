import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <Container className ="footerContainer">
                <Row >
                    <Col xs={12} sm={4} className="image-wrapper">
                        <Navbar.Brand>
                            <Link to="/"><img alt="Roswitha Wulff Logo" src="/images/RWLogo.png"/></Link>
                        </Navbar.Brand>   
                    </Col>
                    <Col xs={12} sm={4}>
                        <Nav defaultActiveKey="/about" className="flex-column">
                            <Nav.Link href="/about">About Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Nav defaultActiveKey="/contact" className="flex-column">
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                </Row> 
            </Container>           
        )
    }
}