import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Nav className ="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/"><img alt="Roswitha Wulff Logo" src="/images/RWLogo.png"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="instagram.com"><img src="images/instagram-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="facebook.com"><img src="images/facebook-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto..."><img src="images/mail-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    </Nav.Item>
                </Nav>
                <p className="text-center mt-4 mb-4">© Copyright Roswitha Wulff 2019</p>
            </div>
        )
    }
}

    /*             <Container className ="footerContainer">
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
                    <Col xs={12} sm={4}>
                        <Nav defaultActiveKey="/contact" className="flex-column">
                            <Nav.Link href="instagram.com"><img src="images/instagram-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> 
                           /*  <Nav.Link href="facebook.com"><img src="images/facebook-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
                            /* <Nav.Link href="mailto..."><img src="images/mail-icon.png" alt=""/></Nav.Link> {/* <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */

                        /* </Nav>
                    </Col>
                </Row> 
            </Container>      */    