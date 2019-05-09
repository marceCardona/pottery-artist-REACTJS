import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavigation.css';


export default class MainNavigation extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img alt="Roswitha Wulff Logo" src="/images/RWLogo.png"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            <NavDropdown title="SHOP" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/shop1">Category 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}