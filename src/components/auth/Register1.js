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
} from '../../actions/authActions';
import './Register1.css';

class Register extends Component {
  // state = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  //   errors: {
  //     cognito: null,
  //     blankfield: false,
  //     passwordmatch: false
  //   }
  // }

  clearErrorState = () => {
    this.props.registerResetErrorsState()
    // this.setState({
    //   errors: {
    //     cognito: null,
    //     blankfield: false,
    //     passwordmatch: false
    //   }
    // });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.props);
    if (error) {
      this.props.registerErrorsState(this.props.errors, error)
      // this.setState({
      //   errors: { ...this.state.errors, ...error }
      // });
    }

    // AWS Cognito integration here
    // const { username, email, password } = this.state
    const { registerUsername, email, registerPassword } = this.props

    try {
      const signUpResponse = await Auth.signUp({
        username: registerUsername,
        password: registerPassword,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
      this.props.history.push('/login');
    } catch (error) {
      let err = null;
      !error.message ? err = { "Message": error } : err = error;
      this.props.registerCognitoErrorsState(this.props.errors, error)
      // this.setState({
      //   errors: {
      //     ...this.state.errors,
      //     cognito: error
      //   }
      // })
    }
  };

  onInputUsernameChange = event => {
    this.props.registerUsernameState(event)
    // this.setState({
    //   [event.target.id]: event.target.value
    // });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputEmailChange = event => {
    this.props.registerEmailState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputPasswordChange = event => {
    this.props.registerPasswordState(event)
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  onInputConfirmPasswordChange = event => {
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
                  value={this.props.registerUsername}
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
                  value={this.props.registerPassword}
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
                  value={this.props.registerConfirmPassword}
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
  username: state.auth.registerUsername,
  email: state.auth.registerEmail,
  password: state.auth.registerPassword,
  confirmPassword: state.auth.registerConfirmPassword,
  errors: state.auth.errors

}, console.log("state.auth", state.auth));

export default connect(mapStateToProps, {
  registerUsernameState,
  registerEmailState,
  registerPasswordState,
  registerConfirmPasswordState,
  registerErrorsState,
  registerResetErrorsState,
  registerCognitoErrorsState
})(Register);