import React, { Component } from 'react';
// import FormErrors from "../FormErrors";
// import Validate from "../utility/FormValidation";
import { InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import { Auth } from "aws-amplify";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    // this.clearErrorState();
    // const error = Validate(event, this.state);
    // if (error) {
    //   this.setState({
    //     errors: { ...this.state.errors, ...error }
    //   });
    // }

    // AWS Cognito integration here
    const { username, email, password } = this.state
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
      this.props.history.push('/welcome');
    } catch (error) {
      let err = null;
      !error.message ? err = { "Message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: error
        }
      })
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Register</h1>
          {/* <FormErrors formerrors={this.state.errors} /> */}

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter Username"
                    aria-label="EnterUsername"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/* <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                /> */}
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter Email"
                    aria-label="EnterEmail"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/* <input
                  className="input"
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                /> */}
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/* <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                /> */}
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Confirm Password"
                    aria-label="ConfirmPassword"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                {/* <input
                  className="input"
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm password"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                /> */}
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <ButtonToolbar>

                  <Button variant="light">Register</Button>

                </ButtonToolbar>
                {/* <button className="button is-success">
                  Register
                </button> */}
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;