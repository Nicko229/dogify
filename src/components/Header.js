import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';


export default class AllBreeds extends Component {

  handleLogout = async event => {
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    console.log("this.auth", this.props.auth)

    if (this.props.auth.isAuthenticated) {
      return (
        <nav classname="header-grandparent">

          <div>
            {this.props.auth.isAuthenticated && this.props.auth.user && (
              <div className="header-parent" >


                <div className='header-parent-left'>
                  <h2 className="dogify">Dogify</h2>
                  <NavLink className="header-child" to="/all-breeds">Canine</NavLink>
                  <NavLink className="header-child" to={"/"}>Pugs</NavLink>
                  <NavLink className="header-child" to={"/user"}>Account</NavLink>
                </div>
                <div className="header-parent-right">
                  <div className="logout-div">
                    <NavLink className="logout"
                      onClick={this.handleLogout}
                      to="/login"  >Logout</NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      )

    } else {
      return <p></p>
    }




  };

}