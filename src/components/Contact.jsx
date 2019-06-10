import React, { Component } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import './Home.css'
import Footer from './Footer';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class Contact extends Component {

	render() {
		const style = {
	 		width: "100%",
	 		height: "100%",
		}
		console.log(this.props.google);
		return (
			<div>
				<Container>
					<h2 className="contactTitle">Where we are</h2>
					<Row className="contact">
						<Col xs={12} md={4} className="map-container">
							<Map
								google={this.props.google} 
								zoom={15}
								style={style}
								initialCenter={{ lat: -33.9443967, lng: 151.1947236 }}
							>
								<Marker position={{ lat: -33.9443967, lng: 151.1947236 }} />
							</Map>
				 		</Col>

				 		<Col xs = {12} md={4}>
				 			<div id = "column2">
		                            <h3>Find us at Botany Bay Studio Pottery</h3>
		                            <p><Image src = "images/address-icon.png" width="22" height="25"/>  5 Underwood Ave - Botany NSW 2019</p>
		                            <p><Image src = "images/phone-icon.jpg" width="25" height="25"/> 0432 052 147</p>
								    <p><Image src = "images/mail-icon.png" width="25" height="25"/> <a href =  "mailto:roswitha@ozemail.com.au">roswitha@ozemail.com.au</a></p>
								    <br/><p><i> Contact us to schedule a visit and see personally the artpieces</i></p>
							</div>
				 		</Col>

				 		<Col xs={12} md={4}>
	                        
		                    <form action="/pagina-processa-dados-do-form" method="post">
								<h3 className="formTitle">Leave a message</h3>
								<label for="name">Name:</label>
								<input	type="text" id="name"/>
								<label for="mail">E-mail:  </label>
								<input type="email" id="mail" />
								<label for="phone">Phone:  </label>
								<input	type="text" id="phone"/>
								<label for="msg">Message:  </label>
								<textarea id="msg"></textarea>
								<button type="submit">Submit Message</button>		
							</form>
	                    </Col>
			 		</Row>
			 	</Container>
			 	<Footer />
			</div>
	 		);
 		}
}

export default GoogleApiWrapper({
 	apiKey: ('AIzaSyAJgOMAGpBI1AUKH9gE8jiecxbK1LD3OYI')
})(Contact);
