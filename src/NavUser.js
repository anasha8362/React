import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Context/Navbar.css'
import { Routing } from './Routing';
import img from './LogoImg.jpg';
import { FaComments, FaHome, FaInfo, FaPhoneAlt, FaSearchLocation, FaEnvelope, FaCalculator, FaBars, FaPlus, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

export class NavUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            found: "False"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({ found: "False" });
        const {found } = this.state;
        localStorage.setItem('found', found);
        console.log( 'found signOut: ', found);
    }
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
                                    <NavLink activeClassName='menu_active' className=" nav-link py-3 px-0 px-lg-3 rounded icn" to="/welcome"><FaHome /></NavLink>
                                </li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/aboutUS"><FaInfo /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/contactUs"><FaPhoneAlt /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/fertilizer"><FaCalculator /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/askQuestion"><FaComments /> </NavLink></li>
                               <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="nav-link py-3 px-0 px-lg-3 rounded icn" to="/emailNotification"><FaEnvelope /></NavLink></li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <NavLink activeClassName='menu_active' className="btn nav-link py-3 px-0 px-lg-3 rounded signInBtn" to="/signIn" onClick={this.handleSubmit}>LogOut </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*<div className='row'>*/}
                {/*    <div className="col-10 mx-auto">*/}



                {/*        <nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
                {/*            <div className="container-fluid">*/}
                {/*                <NavLink className="navbar-brand" to="/" >Plant</NavLink>*/}
                {/*                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*                    <span className="navbar-toggler-icon"></span>*/}
                {/*                </button>*/}
                {/*                <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                {/*                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' exact className="nav-linkk active" aria-current="page" to="/homeUser">Home</NavLink>*/}
                {/*                        </li>*/}


                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk" to="/aboutUS">AboutUs</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk" to="/fertilizer">Fertilizer</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk" to="/contactUs">ContactUs</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk" to="/askQuestion">AskQuestion</NavLink>*/}
                {/*                        </li>*/}
                                       
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk" to="/emailNotification">Email Notification</NavLink>*/}
                {/*                        </li>*/}
                {/*                        <li className="nav-item">*/}
                {/*                            <NavLink activeClassName='menu_active' className="nav-linkk btn btn-outline-success" to="/signIn" onClick={this.handleSubmit}>LogOut</NavLink>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                                    

                {/*                    */}{/*<form className="d-flex">*/}
                {/*                    */}{/*    <input className="form-control me-2"*/}
                {/*                    */}{/*        type="search"*/}
                {/*                    */}{/*        placeholder="Search"*/}
                {/*                    */}{/*        aria-label="Search" />*/}
                {/*                    */}{/*    <button className="btn btn-outline-success" type="submit">Search</button>*/}
                {/*                    */}{/*</form>*/}

                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </nav>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>



        )

    }

}
