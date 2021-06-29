import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import './Context/SignIn.css';
import { Footer } from './Footer';
export class EmailNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            area:"",
            foundemail: "",
            found:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const found = localStorage.getItem('found');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        this.setState({ found, email, password });
        console.log('found:', found, 'email:', email, 'password: ', password);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        console.log(this.state.email)
        console.log(this.state.password)
        event.preventDefault();
        fetch('https://localhost:5002/api/SendEmail', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(this.state) //userdata
        }).then(response => {
            console.log(response);
            return response.json();
        })
            .then(res => {
                if (res) {
                    this.setState({ foundemail: res });
                    console.log('res', this.state.foundemail);
                    console.log('found in Email: ', this.state.found);
                    console.log(res);
                }
                else {
                    this.setState({ loginErrors: 'SignIn Failed' });
                }
            });

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
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                            <span class="login100-form-title" >
                                Email Notification
					</span>
                <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <span class="focus-input100"></span>
                </div>
                <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter Area">
                     <input class="input100" type="text" name="area" placeholder="Area" onChange={this.handleChange} />
                     <span class="focus-input100"></span>
                </div>
               
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn" type="submit" onClick={this.handleSubmit}>
                        Submit
						</button>
                            </div>
                        </form>
                        </div >
                </div>
                <Footer />
            </div>
        )

    }

}
export default EmailNotification;