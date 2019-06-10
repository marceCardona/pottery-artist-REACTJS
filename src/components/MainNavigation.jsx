import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';


export default class MainNavigation extends Component {
    state = {
        productCategories: []
    }
    componentDidMount(){
       /*  const productCategories = this.props.type; */
        fetch('https://tashidhondup.website/wp-json/wc/v3/products/categories?consumer_key=ck_ac641f781fea0c2e0f1ee38dabf97dbc5582d3e3&consumer_secret=cs_dd257268bb5244b40070356de1445b18510e8892')
            .then(fetchResponse => fetchResponse.json())
            .then(jsonData => {
                this.setState({ productCategories: jsonData});
                console.log(this.state.productCategories);
            })
    }
    render() {
        return (
            <Navbar sticky="top" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img alt="Roswitha Wulff Logo" className="logo-header" src="/images/roswithaLogo.png" title="Roswitha Wulff - Pottery Artist"/></Link>
                    </Navbar.Brand>
                    <Navbar.Brand className="brand_name">Roswitha Wulff</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto center">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                             <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                             {this.state.productCategories
                                ? 
                                this.state.productCategories.map(category => {
                                    return (
                                        <NavDropdown.Item href={"/" + category.name} key={category.id}>{category.name}</NavDropdown.Item>
                                    )
                                })
                                
                                : ""
                            }
                            </NavDropdown>
                            <Nav.Link href="/contact">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}