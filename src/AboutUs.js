import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import logoo from './logo.jpg';
import footerImg from './footerImg.jpg';
import './Context/AboutUs.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar, FaHome, FaInfo, FaPhoneAlt, FaSearchLocation, FaEnvelope, FaCalculator, FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

import {
	faFacebookF, faYoutube,
	faFacebook,
	faTwitter,
	faInstagram} from '@fortawesome/free-brands-svg-icons'
import { NavUser } from './NavUser';
library.add(faFacebookF);
const logo = require('./logo.jpg');
console.log(logo);
export class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            found: ''
		}
		

    }
	componentDidMount() {
		
        const found = localStorage.getItem('found');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        this.setState({ found, email, password });
        console.log('found:', found, 'email:', email, 'password: ', password);
    }
	render() {
		 
        return (
            <div>
			<header class="masthead bg-primary text-white text-center">
            
                {
                    this.state.found == "True" ?
                        <NavUser />
                        :
                        <Navigation />
                    }
                        <div class="container">
                            
                        <h2 class="masthead-heading text-uppercase mb-0">About Us</h2>
                         
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><FaStar /></div>
                            <div class="divider-custom-line"></div>
                        </div>
                    </div>
				<h1 className="textt">The purpose of this application will help in curing diseased plants and in notifying about the diseases that are about to strike users area.  This will help user a lot in their questions and quires getting answered by experts of plants and they will know about leafs disease conditions timely. Moreover, they can ask and get expert answers about their plants, seeds soil medicines and much more. </h1>
				
				
				
               
                
                </header>
                <Footer />
            </div>
        )

    }

}
export default AboutUs;