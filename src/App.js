import logo from './logo.svg';
import './Context/App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ProtectedRoute } from "./ProtectedRoute";
import AboutUs from "./AboutUs";
import Fertilizer from "./Fertilizer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import AskQuestion from "./AskQuestion";
import EmailNotification from "./EmailNotification";
//import Navbar from "./Navbar";
import { Home } from './Home';
import { Welcome } from './Welcome';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HomeUser } from './HomeUser';


function App() {

  return (
      <BrowserRouter>

          <div className="Container">
            
            
              <Switch>
                  
                  <Route path='/' component={Home} exact />
                  <Route path="/signIn" component={SignIn} />
                  <Route path="/aboutUS" component={AboutUs} />
                  <Route path="/fertilizer" component={Fertilizer} />
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/contactUs" component={ContactUs} />
                  <Route path="/welcome" component={Welcome} />
                  <ProtectedRoute path="/homeUser" component={HomeUser} />
                  <Route path="/askQuestion" component={AskQuestion} />
                  <Route path="/emailNotification" component={EmailNotification} />
                  <Redirect to="/" />
              </Switch>

          </div>
      </BrowserRouter>
  );
}

export default App;
