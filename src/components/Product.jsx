import React, { Component } from 'react';
import { Container, Figure } from 'react-bootstrap';

export default class Product extends Component {
    state = { 
        productDetails: {}
    }
    componentDidMount(){
        const productId = this.props.match.params.id;
        fetch('https://hplussport.com/api/products/id/' + productId)
            .then(fetchResponse => fetchResponse.json())
            .then(jsonData => this.setState({productDetails: jsonData.pop()}))
    }
    render() {
        return (
            this.state.productDetails.id
                ?  
                <div>
                    <Container className="product-container">
                        <Figure className="selected-product">
                            <Figure.Image
                                width={800}
                                height={300}
                                alt={this.state.productDetails.name}
                                src={this.state.productDetails.image}
                            />
                            <Figure.Caption>
                                <h2>{this.state.productDetails.name}</h2>
                                <p>{this.state.productDetails.description}</p> 
                            </Figure.Caption>
                        </Figure>
                    </Container>
                </div>  
                :  ""
                        
        )
    }
}
