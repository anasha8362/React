import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from './Auth';
/*import { authenticationService } from '@/_services';*/

export const ProtectedRoute = ({ component: Component, ...rest }) => {
   
    const [found, setfound] = useState(localStorage.getItem('found')); 
       // const found = localStorage.getItem('found');
       
     //   this.state.found = found;
        console.log('found auth protected', found);
   
    console.log('from protected route', auth.isAuthenticated());
    return (
        <Route
            {...rest}
            render={props => {
                //const currentUser = authenticationService.currentUserValue;
                //if (!currentUser) {
                //    // not logged in so redirect to login page with the return url
                //    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                //}
                //else {
                //    // authorised so return component
                //    return <Component {...props} />
                //}
               
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                }
                else {
                    if (found == 'True') {
                        return <Component {...props} />;
                    }
                    else {
                        return (<Redirect to={'/'} />);
                    }
                }
            }}
        />    
    );
};