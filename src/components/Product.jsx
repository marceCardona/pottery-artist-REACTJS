import React, { Component } from 'react';
import { Container, Figure } from 'react-bootstrap';
import './Product.css';

export default class Product extends Component {
    state = { 
        productDetails: {}
    }
    componentDidMount(){
        const productId = this.props.match.params.id;
        fetch('https://www.tashidhondup.website/wp-json/wc/v3/products/' + productId + '?consumer_key=ck_ac641f781fea0c2e0f1ee38dabf97dbc5582d3e3&consumer_secret=cs_dd257268bb5244b40070356de1445b18510e8892')
            .then(fetchResponse => fetchResponse.json())
            .then(jsonData => this.setState({productDetails: jsonData}))
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
                                src={this.state.productDetails.images[0].src}
                            />
                            {/* <Figure.Caption className="product_details">
                                <h2>{this.state.productDetails.name}</h2>
                                <p dangerouslySetInnerHTML = {{ __html: this.state.productDetails.short_description }} /> 
                            </Figure.Caption> */}
                        </Figure>
                        <div className="product_details">
                            <h2>{this.state.productDetails.name}</h2>
                            <p dangerouslySetInnerHTML={{ __html: this.state.productDetails.short_description }} />
                            <p dangerouslySetInnerHTML={{ __html: this.state.productDetails.price_html }} /> 
                            
                        </div>
                        
                    </Container>
                </div>  
                :  ""
                        
        )
    }
}
