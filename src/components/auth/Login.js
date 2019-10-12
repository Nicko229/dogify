import React from 'react';
import { InputGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
// import FormErrors from "../FormErrors";
// import Validate from "../utility/FormValidation";

function LogIn() {
  // state = {
  //   username: "",
  //   password: "",
  //   errors: {
  //     cognito: null,
  //     blankfield: false
  //   }
  // };

  let clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  let handleSubmit = async event => {
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
  };

  let onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  // render() {
  return (
    <section className="section auth">
      <div className="container">
        <h1>Log in</h1>
        {/* <FormErrors formerrors={this.state.errors} /> */}

        <form onSubmit={handleSubmit}>
          <div className="form-div-child">
            <p className="control">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              {/* <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                /> */}
            </p>
          </div>
          <div className="form-div-child">
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
              {/* <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span> */}
            </p>
          </div>
          <div className="form-div-child">

            <a href="/forgotpassword">Forgot password?</a>

          </div>
          <div className="form-div-child">
            <p className="control">
              <ButtonToolbar>

                <Button variant="light">Light</Button>

              </ButtonToolbar>
              {/* <button className="button is-success">
                  Login
                </button> */}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
  // }
}

export default LogIn;