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


class Register extends Component {

  clearErrorState = () => {
    this.props.registerResetErrorsState()
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.props);

    if (error) {
      this.props.registerErrorsState(this.props.errors, error)
    }

    // AWS Cognito integration here

    const { username, email, password } = this.props;

    // PROBLEM: Try is resetting props to undefined
    // Can use a promise or not use try catch in async function

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
      this.props.registerCognitoErrorsState(this.props.errors, error)
    }
    console.log("this.props handleSubmit", this.props)
    this.props.history.push('/login');
  };

  onInputUsernameChange = (event) => {
    this.props.registerUsernameState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputEmailChange = (event) => {
    this.props.registerEmailState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputPasswordChange = (event) => {
    this.props.registerPasswordState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputConfirmPasswordChange = (event) => {
    this.props.registerConfirmPasswordState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1 className="dogify">Dogify</h1>
          <h3>Register</h3>
          <FormErrors formerrors={this.props.errors} />

          <form className="parent-form" onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                  value={this.props.username}
                  onChange={this.onInputUsernameChange}
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
                  value={this.props.email}
                  onChange={this.onInputEmailChange}
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
                  value={this.props.password}
                  onChange={this.onInputPasswordChange}
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
                  value={this.props.confirmPassword}
                  onChange={this.onInputConfirmPasswordChange}
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