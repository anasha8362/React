import React, { Component } from 'react';
import './Context/SignUp.css';
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import { Redirect } from 'react-router-dom';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import { SignIn } from './SignIn';
import { Footer } from './Footer';
import { FaStar} from "react-icons/fa";

export class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            loginErrors: "1",
            found: "",
            foundNav:"",
            resFound: [],
            fields: {},
            errors: {},
            showName: false,
            showEmail: false,
            showPassword: false,
            showConfirmPassword: false,
            showAddress: false,
            sucess: false,
            required: "",
            errorMessageName: "",
            errorMessageEmail: "",
            errorEmailFound: "Email Already Exists",
            errorMessagePassword: "",
            errorMessageConfirmPassword: "",
            errorMessageAddress: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }

    handleName(evt) {
        if (!evt.target.value) {
            this.setState({ showName: true, errorMessageName: "Username Required" });
        }
        else if (evt.target.value) {
            this.setState({ [evt.target.name]: evt.target.value, showName: false });
        }
       
    }
    handleEmail(evt) {
        this.setState({ found: ""});
            if (!EmailValidator.validate(evt.target.value)) {
                this.setState({ showEmail: true, errorMessageEmail: "Invaid email" });
            }
            else if (EmailValidator.validate(evt.target.value)) {
                this.setState({ [evt.target.name]: evt.target.value, showEmail: false })
            }

        
    }
    handlePassword(evt) {
        const passwordRegex = /(?=.*[0-9])/;
        if (!evt.target.value) {
            this.setState({ showPassword: true, errorMessagePassword: "Password Required" });
        }
        else if (evt.target.value) {
            this.setState({ [evt.target.name]: evt.target.value, showPassword: false });
        }
        else if (evt.target.value.length < 8) {
            this.setState({ showPassword: true, errorMessagePassword: "Password must be 8 characters long." });
        }
    }
    handleConfirmPassword(evt) {
        if (!evt.target.value) {
            this.setState({ showConfirmPassword: true, errorMessageConfirmPassword: "ReEnter Password Required" });
        }
        else if (evt.target.value && evt.target.value != this.state.password) {
            this.setState({ showConfirmPassword: true, errorMessageConfirmPassword: "Password doesen't match" });
        }
        else if (evt.target.value && evt.target.value == this.state.password) {
            this.setState({ [evt.target.name]: evt.target.value, showConfirmPassword: false });
        }
    }
    handleAddress(evt) {
        if (!evt.target.value) {
            this.setState({ showAddress: true, errorMessageAddress: "Address Required" });
        }
        else if (evt.target.value) {
            this.setState({ [evt.target.name]: evt.target.value, showAddress: false });
        }
    }
 
    handleChange(evt, name) {
       
       
            if (name == "address" ) {
                if (!evt.target.value) {
                    this.setState({ showAddress: true, errorMessage: "Address Required" });
                }
                else if (evt.target.value) {
                    this.setState({ [evt.target.name]: evt.target.value, showAddress: false });
                }
            }
            if (name == "username") {
                if (!evt.target.value) {
                    this.setState({ showName: true, errorMessage: "Username Required" });
                }
                else if (evt.target.value) {
                    this.setState({ [evt.target.name]: evt.target.value, showName: false });
                }
            }
            if (name == "email") {
                if (!EmailValidator.validate(evt.target.value)) {
                    this.setState({ showEmail: true, errorMessage: "Invaid email" });
                }
                else if (!evt.target.value) {
                    this.setState({ showEmail: true, errorMessage: "Email Required" });
                }
                else if (EmailValidator.validate(evt.target.value)) {
                        this.setState({ showEmail: false })
                }
                
             }
            if (name = "Password") {
                const passwordRegex = /(?=.*[0-9])/;
                if (!evt.target.value) {
                    this.setState({ showPassword: true, errorMessage: "Password Required" });
                }
                else if (evt.target.value) {
                    this.setState({ [evt.target.name]: evt.target.value, showPassword: false });
                }
                else if (evt.target.value.length < 8) {
                    this.setState({ showPassword: true, errorMessage: "Password must be 8 characters long." });
                }
            }
            if (name = "confirmPassword") {
                if (!evt.target.value) {
                    this.setState({ showConfirmPassword: true, errorMessage: "ReEnter Password Required" });
                }
                else if (evt.target.value && evt.target.value != this.state.password) {
                    this.setState({ showConfirmPassword: true, errorMessage: "Password doesen't match" });
                }
                else if (evt.target.value && evt.target.value == this.state.password) {
                    this.setState({ [evt.target.name]: evt.target.value, showConfirmPassword: false });
                }
            }
            else {
                this.setState({
                    [evt.target.name]: evt.target.value
                });
            }
        
      
        if (this.state.required != "") {
            this.setState({ show: !this.state.show })
        }
        console.log(this.state);
    }
    handleValidate() {
        let got = false;
        fetch('https://localhost:5002/api/SignUp', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state) //userdata
        }).then(response => {

            return response.json();
        })
            .then(res => {
                if (res) {
                    
                    this.setState({ found: res });
                    got = res;
                    console.log('res', this.state.found);
                    console.log('got', got);
                    const { email, password, found } = this.state;
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                    localStorage.setItem('found', found);
                    console.log('email: ', email, 'password: ', password, 'found signUp: ', found);
                    console.log(res);
                   
                }
                else {
                    this.setState({ loginErrors: 'SignUp Failed' });
                }
            });

        if (got == true) {

            console.log("don't redirect");
        }
        else if (got == false) {
            console.log('redirect');
            /*      this.props.history.push('/SignIn');*/
        }
       
    }
    handleSubmit(event) {
        let success = true;
     
        if (!this.state.username) {
            this.setState({ showName: true, errorMessageName: "Username Required" });
            success = false;
        }
        else if (!this.state.email) {
            this.setState({ showEmail: true, errorMessageEmail: "Email Required" });
            success = false;
        }
        else if (!this.state.password) {
            this.setState({ showPassword: true, errorMessagePassword: "Password Required" });
            success = false;
        }
        else if (!this.state.confirmPassword) {
            this.setState({ showConfirmPassword: true, errorMessageConfirmPassword: "Password doesen't match" });
            success = false;
        }
        else if (!this.state.address) {
            this.setState({ showAddress: true, errorMessageAddress: "Address Required" });
            success = false;
        }
        else {
            success = true;

        }
        if (success) {
            this.handleValidate();
        }
        else {
            console.log("non sucess")
        }
     
        event.preventDefault();
        
        
    }
    render() {
        if (this.state.found == "False") {
            //const found = "True";
            //localStorage.setItem('found', found);
            this.props.history.push("/signIn");
            //return (<SignIn/>
            //    ) 
        }
        return (
        
            <div>
                {
                    this.state.found == "False" ?
                        <NavUser />
                        :
                        <Navigation />
                }
                <header class="masthead bg-primary text-white text-center">
                <div class="main-w3layouts wrapperr">
                        <h1>SignUp Now!</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><FaStar /></div>
                            <div class="divider-custom-line"></div>
                        </div>
                    <div class="main-agileinfo">
                        <div class="agileits-top">
                            <form action="#" method="post">

                                <input class="text try" type="text" name="username" placeholder="Username" required="" onChange={this.handleName} />

                                {
                                    this.state.showName ?
                                <div class="text try alert alert-danger">
                                             {this.state.errorMessageName}.
                                </div>
                                        : null
                                }
                                <input class="text try email" type="email" name="email" placeholder="Email" required="" onChange={this.handleEmail} />
                                {
                                    this.state.found == "True" ?
                                        <div class="text try alert alert-danger">
                                            {this.state.errorEmailFound}.
                                </div>
                                        : null
                                }
                                {
                                    this.state.showEmail ?
                                        <div class="text try alert alert-danger">
                                             {this.state.errorMessageEmail}.
                                </div>
                                        : null
                                }
                                <input class="text try" type="password" name="password" placeholder="Password" required="" onChange={this.handlePassword}  />
                                {
                                    this.state.showPassword ?
                                        <div class="text try alert alert-danger">
                                             {this.state.errorMessagePassword}.
                                </div>
                                        : null
                                }

                                <input class="text try w3lpass" type="password" name="confirmPassword" placeholder="Confirm Password" required="" onChange={this.handleConfirmPassword} />
                                {
                                    this.state.showConfirmPassword ?
                                        <div class="text try alert alert-danger">
                                            {this.state.errorMessageConfirmPassword}.
                                </div>
                                        : null
                                }
                                <input class="text try" type="text" name="address" placeholder="Address" required="" onChange={this.handleAddress} />
                                {
                                    this.state.showAddress ?
                                        <div class="text try alert alert-danger">
                                          {this.state.errorMessageAddress}.
                                </div>
                                        : null
                                }
                                <div class="wthree-text">
                                    <label class="anim">
                                        <input type="checkbox" class="checkbox" required="" />
                                        <span>I Agree To The Terms & Conditions</span>
                                    </label>
                                    <div class="clear"> </div>
                                    </div>
                                    <input className="btn btn-xl btn-outline-light selec" type="submit" value="SIGNUP" onClick={this.handleSubmit} />
                            </form>
                            <p>Don't have an Account? <a href="#"> Login Now!</a></p>
                        </div>
                    </div>
                    <div class="colorlibcopy-agile">
                    </div>
                    <ul class="colorlib-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                </header>
                    <Footer />
            </div>
        )

    }

}
export default SignUp;

