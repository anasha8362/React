import React, { Component } from 'react';
import PlantImage from "./PlantImage"
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import SignIn from './SignIn';
import { Footer } from './Footer';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foundHome: "False",
            found: 'False',
            email: '',
            password: ''
           
        };

        

    }
    componentDidMount() {
       
        const found = localStorage.getItem('found') ;
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        this.setState({ found, email, password });
        console.log('found:', found, 'email:', email, 'password: ', password);
    }
    render() {
        return (
            <div>
            <header class="masthead bg-primary text-white text-center">
                <div className="container-fluid nav_bg">
                    
                    {
                        this.state.found == "True" ?
                            <NavUser />
                            :
                            <Navigation />
                    }
                    
                    
                    <div className='row'>
                        <div className="col-10 mx-auto">

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" >
                                <h1>
                                    Plant Disease Detection
                                </h1>


                                <div className="mt-3">


                                    <PlantImage />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
              
            </header>
              <Footer />
            </div>
        )

    }

}