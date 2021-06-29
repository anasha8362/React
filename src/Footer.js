import React, { Component } from 'react';

import footerImg from './footerImg.jpg';
import './Context/AboutUs.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar, FaHome, FaInfo, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaCalculator, FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export class Footer extends Component {
	
	render() {
		 
		return (

            <div>
                
              
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            {/*-- Footer Location*/}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Location</h4>
                                <div>
                                    <FaMapMarkerAlt />
                                    <p class="loc lead mb-0">
                                        2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                                </div>
                                <div>
                                    <FaPhoneAlt />

                                    <p class="loc"> +1.555.555.5555</p>
                                </div>
                                <div>
                                    <FaEnvelope />
                                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                                </div>
                            </div>
                            {/*-- Footer Social Icons*/}
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Around the Web</h4>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaFacebookF /></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaTwitter /></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaYoutube /></a>
                                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaInstagram /></a>
                            </div>
                            {/*-- Footer About Text*/}
                            <div class="col-lg-4">
                                <h4 class="text-uppercase mb-4">About Company</h4>
                                <p class="loc lead mb-0">
                                    Freelance is a free to use, MIT licensed Bootstrap theme created by
                                    
                                    .
                        </p>
                            </div>
                        </div>
                    </div>
                </footer>
                </div>
        )

    }

}
export default Footer;