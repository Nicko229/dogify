import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import { thisExpression } from '@babel/types';
import { NavLink } from 'react-router-dom';
import {
  authenticated,
  user,
  authenticating,
  usernameState,
  passwordState
} from '../../actions/authActions';
import { connect } from 'react-redux';
import './Login1.css';

class LogIn extends Component {
  state = {
    // username: "",
    // password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }



    try {

      const userLoggedIn = await Auth.signIn(this.props.username, this.props.password);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(userLoggedIn)
      this.props.history.push('/');
    } catch (error) {
      let err = null;
      !error.message ? err = { "Message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
    }
  };

  onInputChangeUsername = event => {
    this.props.usernameState(event);
    // this.setState({
    //   [event.target.id]: event.target.value
    // });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  onInputChangePassword = event => {
    this.props.passwordState(event);
    // this.setState({
    //   [event.target.id]: event.target.value
    // });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {

    console.log("this.props", this.props)
    return (
      <section className="section auth">
        <div className="container">
          <h1 className="dogify">Dogify</h1>
          <h3 className="login">Log in</h3>
          <FormErrors formerrors={this.state.errors} />

          <form className="parent-form" onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.props.username}
                  onChange={this.onInputChangeUsername}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.onInputChangePassword}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <NavLink to="/register">
                  <button className="button is-success">
                    Register
                  </button>
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.authenticated,
  userAuth: state.auth.user,
  isAuthenticating: state.auth.authenticating,
  username: state.auth.username,
  password: state.auth.password
});

export default connect(mapStateToProps, { authenticated, user, authenticating, usernameState, passwordState })(LogIn);