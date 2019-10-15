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

  // // Change this to call redux action - userAuth
  // state = {
  //   isAuthenticated: false,
  //   isAuthenticating: true,
  //   user: null
  // }

  setAuthStatus = () => {
    // call redux action - authenticated
    this.props.authenticated()
    // this.setState({ isAuthenticated: authenticated });
  }

  setUser = () => {
    // call redux action - user
    this.props.user()
  }

  async componentDidMount() {

    try {
      const session = await atRule.currentSession();
      console.log("Hello from Componentdid mount further")
      // this.setAuthStatus() not being called correctly. Being returned as undefined
      this.props.authenticated()

      console.log(session)
      const user = await Auth.currentAuthenticatedUser();
      console.log("hello from componentDidMount")
      this.props.user(user);
    } catch (error) {
      console.log(error);
    }
    // call redux action
    this.props.authenticating();
  }

  render() {
    // use the state here!!!
    let authProps = {
      isAuthenticated: this.props.isAuthenticated,
      user: this.props.user,
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

// mapstatetoprops
const mapStateToProps = state => ({
  isAuthenticated: state.auth.authenticated,
  userAuth: state.auth.user,
  isAuthenticating: state.auth.authenticating
});

// connect function
export default connect(mapStateToProps, { authenticated, user, authenticating })(App);
