import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pug from './components/Pug';
import AllBreeds from './components/AllBreeds';
import Login from './components/auth/Login1';
import Register from './components/auth/Register1';
import Header from './components/Header';
import Error from './components/Error';
import User from './components/User';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import {
  authenticated,
  user,
  authenticating
} from './actions/authActions';


import { atRule } from 'postcss';

class App extends Component {

  setAuthStatus = () => {
    this.props.authenticated()
  }

  setUser = (user) => {
    this.props.user(user)
  }

  async componentDidMount() {

    try {
      const session = await atRule.currentSession();
      this.setAuthStatus()
      console.log("sesstion", session)
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
    this.props.authenticating();
  }


  render() {
    console.log("this.propssss", this.props)
    let authProps = {
      isAuthenticated: this.props.isAuthenticated,
      user: this.props.userAuth,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
      !this.props.isAuthenticating &&

      <BrowserRouter>
        <div>
          <Header auth={authProps} />
          <Switch>
            <Route path="/" render={(props) => <Pug {...props} auth={() => authProps} />} exact />
            <Route path="/all-breeds" render={(props) => <AllBreeds {...props} auth={authProps} />} />
            <Route path="/login" render={(props) => <Login {...props} auth={authProps} />} />
            <Route path="/register" render={(props) => <Register {...props} auth={authProps} />} />
            <Route path="/user" render={(props) => <User {...props} auth={authProps} />} />
            < Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
  userAuth: state.auth.user
});

export default connect(mapStateToProps, { authenticated, user, authenticating })(App);
