import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.id)
});



const Auth = ({ loggedIn, path, component: Component, exact }) => {

    return <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Redirect to="/admin/home" /> : <Component {...props} />
        )}
    />
};

const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/admin/home" />
        )}
    />
);



export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));