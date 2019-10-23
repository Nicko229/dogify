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
  passwordState,
  errorsState
} from '../../actions/authActions';
import { connect } from 'react-redux';
import './Login1.css';

function LogIn(props) {

  let clearErrorState = () => {
    props.errorsState({
      errors: {
        cognito: null,
        blankfield: false
      }
    })
  };

  let handleSubmit = async event => {
    event.preventDefault();
    clearErrorState();
    const error = Validate(event, props);
    if (error) {
      props.errorsState({
        errors: { ...props.errors, ...error }
      })
    }

    try {

      const userLoggedIn = await Auth.signIn(props.username, props.password);
      props.auth.setAuthStatus(true);
      props.auth.setUser(userLoggedIn)
      props.history.push('/');
    } catch (error) {
      let err = null;
      !error.message ? err = { "Message": error } : err = error;
      props.errorsState({
        errors: {
          ...props.errors,
          cognito: err
        }
      })
    }
  };

  let onInputChangeUsername = event => {
    props.usernameState(event);
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  let onInputChangePassword = event => {
    props.passwordState(event);
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  return (
    <section>
      <div className="login-container">
        <h1 className="dogify">Dogify</h1>
        <h3 className="login">Log in</h3>
        <FormErrors formerrors={props.errors} />

        <form className="login-parent-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <p>
              <input
                className="login-input"
                type="text"
                id="username"
                aria-describedby="usernameHelp"
                placeholder="Enter username or email"
                value={props.username}
                onChange={onInputChangeUsername}
              />
            </p>
          </div>
          <div className="login-field">
            <p>
              <input
                className="login-input"
                type="password"
                id="password"
                placeholder="Password"
                value={props.password}
                onChange={onInputChangePassword}
              />
              <span>
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="login-field">
            <p>
              <button className="login-button">
                Login
                </button>
            </p>
          </div>
          <div className="login-field">
            <p>
              <NavLink to="/register">
                <button className="login-button">
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.authenticated,
  userAuth: state.auth.user,
  isAuthenticating: state.auth.authenticating,
  username: state.auth.username,
  password: state.auth.password,
  errors: state.auth.errors
});

export default connect(mapStateToProps, { authenticated, user, authenticating, usernameState, passwordState, errorsState })(LogIn);