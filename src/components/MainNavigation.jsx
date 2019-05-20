import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNavigation.css';


export default class MainNavigation extends Component {
    state = {
        productDetails: []
    }
    componentDidMount(){
       /*  const productCategories = this.props.type; */
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/3')
            .then(fetchResponse => fetchResponse.json())
            .then(jsonData => this.setState({productDetails: jsonData}))
    }
    render() {
        return (
            <Navbar sticky="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img alt="Roswitha Wulff Logo" src="/images/RWLogo.png" title="Roswitha Wulff - Pottery Artist"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                             <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                             {this.state.productDetails
                                ? 
                                this.state.productDetails.map(category => {
                                    return (
                                        <NavDropdown.Item href="/shop1">{category.id} 1</NavDropdown.Item>
                                    )
                                })
                                
                                : ""
                            }
                            </NavDropdown>
                            <Nav.Link href="/articles">ARTICLES</Nav.Link>
                            <Nav.Link href="/contact">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}