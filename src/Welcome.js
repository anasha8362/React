import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import { Footer } from './Footer';
import img from './LogoImg.jpg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './Context/Welcome.css';
import welcomeLeaf from './welcomeLeaf.jpg';
import { FaStar, FaHome, FaInfo, FaPhoneAlt, FaSearchLocation, FaEnvelope, FaCalculator,FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF} from "react-icons/fa";

export class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
          

        };



    }
    render() {
        return (
          
                <div >
                {
                    this.state.found == "True" ?
                        <NavUser />
                        :
                        <Navigation />
                }
                      
              

              {/*-- Navigation*/}
                {/*<nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">*/}
                {/*    <div class="container">*/}
                {/*        <div>*/}
                {/*            <img className="imgg" src={img} alt="Logo" />*/}
                {/*            <h3 className="logo">Save<span className="spanN">Plant</span></h3>*/}
                {/*        </div>*/}
                       
                {/*        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*            Menu*/}
                {/*    <FaBars/>*/}
                {/*        </button>*/}
                {/*        <div class="collapse navbar-collapse" id="navbarResponsive">*/}
                {/*            <ul class="navbar-nav ms-auto">*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded icn" href="#portfolio"><FaHome/></a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded icn" href="#about"><FaInfo/></a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded icn" href="#contact"><FaPhoneAlt/></a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded icn" href="#contact"><FaCalculator/></a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded icn" href="#contact"><FaEnvelope/></a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="btn nav-link py-3 px-0 px-lg-3 rounded signInBtn" href="#contact">Sign In </a></li>*/}
                {/*                <li class="nav-item mx-0 mx-lg-1"><a class="btn  nav-link py-3 px-0 px-lg-3 rounded signInBtn" href="#contact">Sign Up</a></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</nav>*/}
             {/*-- Masthead*/}
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        {/*-- Masthead Avatar Image*/}
                        <img className="masthead-avatar mb-5" src={welcomeLeaf} alt="Logo" />
                        {/*-- Masthead Heading*/}
                <h1 class="masthead-heading text-uppercase mb-0">Welcome User! </h1>
                        {/*-- Icon Divider*/}
                <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><FaStar/></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/*-- Masthead Subheading*/}
                        <div class="text-center mt-4">
                            <a class="btn btn-xl btn-outline-light select" href="https://hamzaatiqhere.github.io/fyp/">
                               
                        Use As a Guest! 
                    </a>
                        </div>
                        <div class="text-center mt-4">
                            <NavLink activeClassName='menu_active' className="btn btn-xl btn-outline-light select" to="/signIn" onClick={this.handleSubmit}> Login As User! </NavLink>
                        
                        </div>
                    </div>
                </header>
             
                {/*-- About Section*/}
                <section class="about  text-white mb-0" id="about">
                    <div class="container">
                        {/*-- About Section Heading*/}
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
                        {/*-- Icon Divider*/}
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><FaStar /></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/*-- About Section Content*/}
                <div class="row">
                            <div class="col-lg-4 ms-auto"><p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div class="col-lg-4 me-auto"><p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>
                        {/*-- About Section Button*/}
               
                    </div>
                </section>
                {/*-- Contact Section*/}
                {/*<section class="page-section" id="contact">*/}
                {/*    <div class="container">*/}
                {/*        */}{/*-- Contact Section Heading*/}
                {/*<h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>*/}
                {/*        */}{/*-- Icon Divider*/}
                {/*<div class="divider-custom">*/}
                {/*            <div class="divider-custom-line"></div>*/}
                {/*            <div class="divider-custom-icon"><FaStar /></div>*/}
                {/*            <div class="divider-custom-line"></div>*/}
                {/*        </div>*/}
                {/*        */}{/*-- Contact Section Form*/}
                {/*<div class="row justify-content-center">*/}
                {/*            <div class="col-lg-8 col-xl-7">*/}
                {/*                */}{/*-- * * * * * * * * * * * * * * **/}
                {/*        */}{/*-- * * SB Forms Contact Form * **/}
                {/*        */}{/*-- * * * * * * * * * * * * * * **/}
                {/*        */}{/*-- This form is pre-integrated with SB Forms.*/}
                {/*        */}{/*-- To make this form functional, sign up at*/}
                {/*        */}{/*-- https://startbootstrap.com/solution/contact-forms*/}
                {/*        */}{/*-- to get an API token!*/}
                {/*        <form id="contactForm" data-sb-form-api-token="API_TOKEN">*/}
                {/*                    */}{/*-- Name input*/}
                {/*            <div class="form-floating mb-3">*/}
                {/*                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />*/}
                {/*                        <label for="name">Full name</label>*/}
                {/*                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>*/}
                {/*                    </div>*/}
                {/*                    */}{/*-- Email address input*/}
                {/*            <div class="form-floating mb-3">*/}
                {/*                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />*/}
                {/*                        <label for="email">Email address</label>*/}
                {/*                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>*/}
                {/*                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>*/}
                {/*                    </div>*/}
                {/*                    */}{/*-- Phone number input*/}
                {/*            <div class="form-floating mb-3">*/}
                {/*                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />*/}
                {/*                        <label for="phone">Phone number</label>*/}
                {/*                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>*/}
                {/*                    </div>*/}
                {/*                    */}{/*-- Message input*/}
                {/*            <div class="form-floating mb-3">*/}
                {/*                        <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."  data-sb-validations="required"></textarea>*/}
                {/*                        <label for="message">Message</label>*/}
                {/*                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>*/}
                {/*                    </div>*/}
                {/*                    */}{/*-- Submit success message*/}
                {/*            */}{/*--*/}
                {/*            */}{/*-- This is what your users will see when the form*/}
                {/*            */}{/*-- has successfully submitted*/}
                {/*            <div class="d-none" id="submitSuccessMessage">*/}
                {/*                        <div class="text-center mb-3">*/}
                {/*                            <div class="fw-bolder">Form submission successful!</div>*/}
                {/*                    To activate this form, sign up at*/}
                {/*                    <br />*/}
                {/*                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    */}{/*-- Submit error message*/}
                {/*            */}{/*--*/}
                {/*            */}{/*-- This is what your users will see when there is*/}
                {/*            */}{/*-- an error submitting the form*/}
                {/*            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>*/}
                {/*                    */}{/*-- Submit Button*/}
                {/*            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>*/}
                {/*                </form>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*-- Footer*/}
                <Footer/>
                {/*<footer class="footer text-center">*/}
                {/*    <div class="container">*/}
                {/*        <div class="row">*/}
                {/*            */}{/*-- Footer Location*/}
                {/*    <div class="col-lg-4 mb-5 mb-lg-0">*/}
                {/*                <h4 class="text-uppercase mb-4">Location</h4>*/}
                {/*                <div>*/}
                {/*                <FaSearchLocation/>*/}
                {/*                <p class="loc lead mb-0">*/}
                {/*                    2215 John Daniel Drive*/}
                {/*            <br />*/}
                {/*            Clark, MO 65243*/}
                {/*        </p>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                <FaPhoneAlt  />*/}

                {/*                    <p class="loc"> +1.555.555.5555</p>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <FaEnvelope  />*/}
                {/*                    <p><a href="mailto:support@company.com">support@company.com</a></p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            */}{/*-- Footer Social Icons*/}
                {/*    <div class="col-lg-4 mb-5 mb-lg-0">*/}
                {/*                <h4 class="text-uppercase mb-4">Around the Web</h4>*/}
                {/*                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaFacebookF/></a>*/}
                {/*                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaTwitter/></a>*/}
                {/*                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaYoutube/></a>*/}
                {/*                <a class="btn btn-outline-light btn-social mx-1" href="#!"><FaInstagram /></a>*/}
                {/*            </div>*/}
                {/*            */}{/*-- Footer About Text*/}
                {/*    <div class="col-lg-4">*/}
                {/*                <h4 class="text-uppercase mb-4">About Company</h4>*/}
                {/*                <p class="loc lead mb-0">*/}
                {/*                    Freelance is a free to use, MIT licensed Bootstrap theme created by*/}
                            
                {/*            .*/}
                {/*        </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</footer>*/}
               
              
                
            
            </div>
        )

    }

}