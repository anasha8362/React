import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import AboutUs from "./AboutUs";
import Fertilizer from "./Fertilizer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
//import ContactUs from "./ContactUs";
//import AskQuestion from "./AskQuestion";
//import Navbar from "./Navbar";
import { Home } from './Home';
import React, { Component } from "react";
import { Department } from './Department';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


export class Routing extends Component {
    render() {
        return (
       

            
                   

                <div className="Container">
               
                    {/*<Navigation />*/}
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path="/aboutUS" component={AboutUs} />
                        <Route path="/fertilizer" component={Fertilizer} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/signIn" component={SignIn} />

                        <Redirect to="/" />
                    </Switch>

                </div>
            
        );
    }
}