import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import { connect } from 'react-redux';
import {
  registerUsernameState,
  registerEmailState,
  registerPasswordState,
  registerConfirmPasswordState,
  registerErrorsState,
  registerResetErrorsState,
  registerCognitoErrorsState
} from '../../actions/registerAuthActions';
import './Register1.css';


function Register(props) {

  let clearErrorState = () => {
    props.registerResetErrorsState()
  }

  let handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, props);

    if (error) {
      props.registerErrorsState(props.errors, error)
    }

    // AWS Cognito integration here

    const { username, email, password } = props;

    // PROBLEM: Try is resetting props to undefined
    // email is set to undefined somehow by Auth.signUp
    // try using the other cognito account

    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
    }
    catch (error) {
      let err = null;
      !error.message ? err = { "Message": error } : err = error;
      props.registerCognitoErrorsState(props.errors, error)
    }
    console.log("this.props handleSubmit", props)
    props.history.push('/login');
  };

  let onInputUsernameChange = (event) => {
    props.registerUsernameState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  let onInputEmailChange = (event) => {
    props.registerEmailState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  let onInputPasswordChange = (event) => {
    props.registerPasswordState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  let onInputConfirmPasswordChange = (event) => {
    props.registerConfirmPasswordState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }


  return (
    <section className="section auth">
      <div className="container">
        <h1 className="dogify">Dogify</h1>
        <h3>Register</h3>
        <FormErrors formerrors={props.errors} />

        <form className="parent-form" onSubmit={handleSubmit}>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                id="username"
                aria-describedby="userNameHelp"
                placeholder="Enter username"
                value={props.username}
                onChange={onInputUsernameChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={props.email}
                onChange={onInputEmailChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                id="password"
                placeholder="Password"
                value={props.password}
                onChange={onInputPasswordChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                id="confirmpassword"
                placeholder="Confirm password"
                value={props.confirmPassword}
                onChange={onInputConfirmPasswordChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Register
                </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  username: state.registerAuth.username,
  email: state.registerAuth.email,
  password: state.registerAuth.password,
  confirmPassword: state.registerAuth.confirmPassword,
  errors: state.registerAuth.errors
});

export default connect(mapStateToProps, {
  registerUsernameState,
  registerEmailState,
  registerPasswordState,
  registerConfirmPasswordState,
  registerErrorsState,
  registerResetErrorsState,
  registerCognitoErrorsState
})(Register);