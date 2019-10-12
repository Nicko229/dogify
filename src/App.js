import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Pug from './components/Pug';
import AllBreeds from './components/AllBreeds';
import Login from './components/auth/Login1';
import Register from './components/auth/Register1';
import Header from './components/Header';
import Error from './components/Error';

import store from './store'

class App extends Component {

  state = {
    isAuthenticated: false,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    let authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
      <Provider store={store} hello={console.log('store', store)}>
        <BrowserRouter>
          <div>
            <Header auth={authProps} />
            <Switch>
              <Route path="/" render={(props) => <Pug {...props} auth={() => authProps} />} exact />
              <Route path="/all-breeds" render={(props) => <AllBreeds {...props} auth={authProps} />} />
              <Route path="/login" render={(props) => <Login {...props} auth={authProps} />} />
              <Route path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              < Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
