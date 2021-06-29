import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import { Footer } from './Footer';
import './Context/AskQuestion.css';
import { FaStar, FaHome, FaInfo, FaPhoneAlt, FaSearchLocation, FaEnvelope, FaCalculator, FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            found: ''
        };
        this.onUnload = this.onUnload.bind(this);
       
    }
    onUnload = e => { // the method that will be used for both add and remove event
        e.preventDefault();
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
                {
                    this.state.found == "True" ?
                        <NavUser />
                        :
                        <Navigation />
                }
                <header class="masthead bg-primary text-white text-center">
                    <h2 class="masthead-heading text-uppercase mb-0">Ask Questions here!</h2>

                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FaStar /></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light select" href="https://plantdisease.discussion.community/">

                            Ask Questions In community!
                    </a>
                    </div>
                </header>
                <div className="ask">
                    <Footer />
                </div>
                
            </div>
        )

    }

}
export default AskQuestion;