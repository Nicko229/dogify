import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pug from './components/Pug';
import AllBreeds from './components/AllBreeds';
import Login from './components/auth/Login1';
import Register from './components/auth/Register1';
import Header from './components/Header';
import Error from './components/Error';
import User from './components/User';
import AuthorizationError from './components/AuthorizationError';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import {
  authenticated,
  user,
  authenticating
} from './actions/authActions';


import { atRule } from 'postcss';

function App(props) {

  let setAuthStatus = () => {
    props.authenticated()
  }

  let setUser = (user) => {
    props.user(user)
  }

  useEffect(() => {
    async function pageLoad() {
      try {
        const session = await atRule.currentSession();
        setAuthStatus()
        console.log("session", session)
        const user = await Auth.currentAuthenticatedUser();
        setUser(user)
      } catch (error) {
        console.log(error);
      }
    }
    props.authenticating();
    return pageLoad
  })

  let authProps = {
    isAuthenticated: props.isAuthenticated,
    user: props.userAuth,
    setAuthStatus: setAuthStatus,
    setUser: setUser
  }

  return (
    !props.isAuthenticating &&

    <BrowserRouter>
      <div >
        <Header auth={authProps} />
        <Switch>
          <Route path="/" render={(props) => <Pug {...props} auth={() => authProps} />} exact />
          <Route path="/all-breeds" render={(props) => <AllBreeds {...props} auth={authProps} />} />
          <Route path="/login" render={(props) => <Login {...props} auth={authProps} />} />
          <Route path="/register" render={(props) => <Register {...props} auth={authProps} />} />
          <Route path="/user" render={(props) => <User {...props} auth={authProps} />} />
          <Route path="/authorization-error" render={(props) => <AuthorizationError {...props} auth={authProps} />} />
          < Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
  userAuth: state.auth.user
});

export default connect(mapStateToProps, { authenticated, user, authenticating })(App);
