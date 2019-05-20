import React, { Component } from 'react';
import Footer from './Footer';
import { Container, Jumbotron, Row, Col, Button, Image } from 'react-bootstrap';




export default class Articles extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="">
                    <Container>
                        <h1>Articles</h1>
                        <Button variant="primary">Download Article</Button>
                    </Container>    
                </Jumbotron>
                <Footer />
            </div>

        )
    }
}