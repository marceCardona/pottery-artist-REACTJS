import React, { Component } from 'react';
import { Jumbotron, Container, Figure } from 'react-bootstrap';
import './Shop.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';




export default class Shop extends Component {
    state = { 
        data: [],
            }
    componentDidMount(){
                fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/10')
            .then(data => data.json())
            .then(data => this.setState({data}))
    }
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron-shop1" style={{backgroundImage: 'url(images/ceramicCa3.jpg)',}}>Category 1 Name</Jumbotron>
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
                                                    height={180}
                                                    alt={product.image_title}
                                                    src={product.image}
                                                />
                                                <Figure.Caption>
                                                    <h2>{product.name}</h2>
                                                    <p>{product.description}</p> 
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

/* 
import PropTypes from 'prop-types'

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "Hola Hola", "author": "Marcela Cardona", "pages": 34},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2 style={style}>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark today: {freeBookmark ?  'yes!' : 'no!'}</p>
        </section>    
    )
}

const Hiring = () =>
    <div>
        <p>The Library is now hiring</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The Library is not hiring at the moment</p>
    </div>

const style = {
    backgroundColor: 'pink',
    color: 'purple'
}    

class Library extends React.Component {
    //default that gives values for the application not to break if the data cannot be accessed
    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }

    state = { 
        open: true, 
        freeBookmark: false,
        hiring: false,
        data: [],
        loading: false
    }
    componentDidMount(){
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/4')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({open: !prevState.open}))
    }
    render() {
        const { books } = this.props
        return(
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading
                    ? "Loading..."
                    : <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h3>Library product of the week!</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100} alt={product.name}/>
                                </div>    
                            )
                        })}
                    </div>
                }
                <h1>The Library is now {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
    
                {books.map(
                    (book, i) =>
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark} />
                )}
    
            </div>
        )
    }
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

render(
    <Library books={bookList}/>, 
    document.getElementById('root')
)


 */
//sample of a form 
/* class FavouriteColorForm extends React.Component {

    state = { value: ''}

    newColor = e =>
        this.setState({ value: e.target.value })

    submit = e => {
        console.log(`New Color: ${this.state.value}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Color: 
                    <input 
                        type="color"
                        onChange={this.newColor} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
} 
render(
    <FavouriteColorForm />,
    document.getElementById('root')
) */