import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Switch, Route } from 'react-router-dom';
// import LoginContainer from './admin/login_container'
// import RegisterContainer from './admin/register_container'
import NavBarContainer from './nav/navbar_container';
import Home from './main/home';
import Footer from './admin/footer';
import Forms from './admin/forms';
// import SplashContainer from './splash/splash';
import AdminDashboard from './admin/dashboard_container';
// import Modal from './modal/modal';


const App = () => (
    <div className="app-div">
        <NavBarContainer />
        <Switch>
            <ProtectedRoute exact path="/admin/home" component={AdminDashboard} />
            <Route exact path="/admin" component={Forms} />
        </Switch>
        <Route path="/" component={Home} />
        <AuthRoute path="/" component={Footer} />
    </div>
)

export default App;