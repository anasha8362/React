import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import './Context/ContactUs.css';
import { Footer } from './Footer';
export class ContactUs extends Component {
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
                {
                    this.state.found == "True" ?
                        <NavUser />
                        :
                        <Navigation />
                }
                <header class="masthead bg-primary text-white text-center">
                <div className="bdy">
                <title>Contact us</title>
                <form action="/" class="decor">
                        <div class="LeftDecoration"></div>
                        <div class="rightDecoration"></div>
                    <div class="circle"></div>
                    <div class="form-inner">
                            <h1 className="he">Contact us</h1>
                            <input className="Inp"type="text" placeholder="Username"/>
                            <input className="Inp" type="email" placeholder="Email" />
                            <textarea className="txtArea" placeholder="Message..." rows="5"></textarea>
                            <button className="Bbtn" type="submit" href="/">Submit</button>
                      </div>
                    </form>
                    </div>
                </header>

                    <Footer />
            </div>

        )

    }

}
export default ContactUs;