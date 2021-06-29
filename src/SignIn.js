import React, { Component } from "react";
import './Context/SignIn.css';
import { Footer } from './Footer';
import auth from './Auth'
import { Routing } from './Routing';
import { Navigation } from './Navigation';
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import { NavUser } from './NavUser';
import { HomeUser } from './HomeUser';
import { FaStar } from "react-icons/fa";

export  class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            found: "",
            loginErrors: "Login Failed",
            errorFound:"Email or Password is incorrect "
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleSubmited = this.handleSubmited.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            found: ""
        });
    }
    handleSignup() {

    }
    handleSubmit(event) {
        console.log(this.state.email)
        console.log(this.state.password)
        event.preventDefault();
        fetch('https://localhost:5002/api/SignIn', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state) //userdata
        }).then(response => {
            console.log(response);
            return response.json();
        })
            .then(res => {
                if (res) {
                    this.setState({ found: res });
                    console.log('res: ', this.state.found);
                    const { email, password, found } = this.state;
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('found', found);
                    console.log('email: ', email, 'password: ', password, 'found signIn: ', found);
                    console.log(res);
                    this.handleSubmited();
                }
                else {
                    this.setState({ loginErrors: 'SignIn Failed' });
                }
            });
    
        
    }
    handleSubmited() {
        <HomeUser />
        console.log('found Handle submited');
    }
    
    render() {
        if (this.state.found == "True") {
            /*return (<HomeUser />)*/

            auth.login(() => {
                <HomeUser />
                this.props.history.push("/homeUser");
                console.log('found render');
            });
        }
        else {
            console.log('Not found render');
        }
        return (
            <div class="limiter">
                {
                    this.state.found == "True" ?
                        <NavUser />
                        :
                        <Navigation />
                }
                <header class="masthead bg-primary text-white text-center">
                    {/*<h1>Sign In!</h1>*/}
                    {/*<div class="divider-custom divider-light">*/}
                    {/*    <div class="divider-custom-line"></div>*/}
                    {/*    <div class="divider-custom-icon"><FaStar /></div>*/}
                    {/*    <div class="divider-custom-line"></div>*/}
                    {/*</div>*/}
                    <div class="bdy">
                            <form class="decor">
                                <div class="LeftDecoration"></div>
                                <div class="rightDecoration"></div>
                                <div class="circle"></div>
                                <div class="form-inner">
                                    <h1 className="he">Sign In </h1>
                            {
                                this.state.found == "False" ?
                                    <div class="text alert alert-danger">
                                        {this.state.errorFound}.
                                </div>
                                    : null
                            }

                            
                            <input className=" Inp" type="text" name="email" placeholder="Username" onChange={this.handleChange} />
                            <input class="Inp" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                            <button className="Bbtn" type="submit" onClick={this.handleSubmit}> Sign in</button>
                            <button className="Bbtn" >  Use as a Guest </button>
                            
                            <div class="flex-col-c p-t-170 p-b-40">
                                <span class="txt1 p-b-9">
                                    Don’t have an account?
						</span>
                                <Link className="txt3" to="/SignUp">Sign up now</Link>
                            
                            </div>

                                </div>
                                    </form>
                    </div>
                   
                </header>
                    <Footer />
            </div>

        )
    }
}
export default SignIn;