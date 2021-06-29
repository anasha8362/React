import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Context/Navbar.css'
import { Routing } from './Routing';
import img from './LogoImg.jpg';
import { FaStar, FaHome, FaInfo, FaPhoneAlt, FaSearchLocation, FaEnvelope, FaCalculator, FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export class Navigation extends Component {
    render() {
        return (

            <div className="container-fluid nav_bg">
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div class="container">
                        <div>
                            <img className="imgg" src={img} alt="Logo" />
                            <h3 className="logo">Save<span className="spanN">Plant</span></h3>
                        </div>

                        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                    <FaBars />
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active'  className=" nav-link py-3 px-0 px-lg-3 rounded icn" to="/welcome"><FaHome /></NavLink>
                                </li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/aboutUS"><FaInfo /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/contactUs"><FaPhoneAlt /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/fertilizer"><FaCalculator /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="btn nav-link py-3 px-0 px-lg-3 rounded signInBtn" to="/signIn">Sign In </NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="btn  nav-link py-3 px-0 px-lg-3 rounded signInBtn" to="/signUp">Sign Up</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*<div className='row'>*/}
                {/*    <div className="col-10 mx-auto">*/}



                {/*        <nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
                {/*            <div className="container-fluid">*/}
                {/*                <div>*/}
                {/*                <img className="imgg" src={img} alt="Logo" />*/}
                {/*                    <h3 className="logo">Save<span>Plant</span></h3>*/}
                {/*                </div>*/}
                {/*                <div className="cont collapse navbar-collapse" id="navbarSupportedContent">*/}
                {/*                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' exact className="navText nav-linkk active" aria-current="page" to="/">Home</NavLink>*/}
                {/*                        </li>*/}


                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk navText" to="/aboutUS">AboutUs</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk navText" to="/fertilizer">Fertilizer</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk navText" to="/contactUs">ContactUs</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk navText btn btn-success" to="/signIn">SignIn</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk navText btn btn-success" to="/signUp">SignUp</NavLink>*/}
                {/*                        </li>*/}




                {/*                    </ul>*/}

                                   

                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </nav>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>



        )

    }

}
