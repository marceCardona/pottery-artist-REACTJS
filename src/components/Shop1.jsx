import React, { Component } from 'react';
import { Jumbotron, Container, Figure } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';


export default class Shop extends Component {
    state = { 
        data: [],
            }
    componentDidMount(){
        fetch('https://www.tashidhondup.website/wp-json/wc/v3/products/categories/16?consumer_key=ck_ac641f781fea0c2e0f1ee38dabf97dbc5582d3e3&consumer_secret=cs_dd257268bb5244b40070356de1445b18510e8892')
            .then(data => data.json())
            .then(data => this.setState({data}))
    }
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron-shop1" style={{backgroundImage: 'url(images/carousel3.jpg)',}}>
                    <h2>Category 1 Name</h2></Jumbotron>
                <Container className="category-container">
                    {!this.state.data
                        ? ""
                        : <div>
                            {this.state.data.map(product => {
                                const productLink='/product/' + product.id;
                                return (
                                    <div key={product.id}>                                
                                        <Figure className="shop-product">
                                            <Link to={productLink}>
                                                <Figure.Image
                                                    width={171}
                                                    alt={product.image_title}
                                                    src={product.images[0].src}
                                                />
                                                <Figure.Caption>
                                                    <h2>{product.name}</h2>
                                                </Figure.Caption>
                                            </Link>                                                
                                        </Figure>  
                                    </div>    
                                )
                            })}
                        </div>
                    }
                </Container>
                <Footer />
            </div>
        )
    }
}
