import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './Home.css';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Nav className ="justify-content-center footerContainer">
                    <Nav.Item>
                        <Nav.Link href="/"><img alt="Roswitha Wulff Logo" src="/images/roswithaLogo.png" width="130px"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="privacy.docx" className="footer-item">Privacy</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about" className="footer-item">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact" className="footer-item">Contact Us</Nav.Link>
                    </Nav.Item>
                    <a className="socialmedia footer-item" href="https://www.instagram.com/roswithawulff/"><img src="/images/instagram-icon.png" alt="Instagram Icon"/></a> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    <a className="socialmedia footer-item" href="https://www.facebook.com/people/Roswitha-Wulff-Ceramics/100011337492793"><img src="/images/facebook-icon.png" alt="Facebook Icon"/></a> {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                    <a className="socialmedia footer-item" href="mailto:roswitha@ozemail.com.au"><img src="/images/mail-icon.png" alt="Mail Icon"/></a> {/* <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                </Nav>
                <p className="text-center mt-4 mb-4">© Copyright Roswitha Wulff 2019</p>
            </div>
        )
    }
}
