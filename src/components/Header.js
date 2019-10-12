import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './Header.css';


export default class AllBreeds extends Component {

  handleLogout = async event => {
    // event.preventDefault();
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
          <div >
            <NavLink to="/all-breeds">All Breeds</NavLink>
            <NavLink to={!this.props.auth.isAuthenticated ? '/login' : "/"}>Pugs</NavLink>
            <NavLink onClick={this.handleLogout} to="/login"  >Logout</NavLink>
          </div>
          <div>
            {this.props.auth.isAuthenticated && this.props.auth.user && (
              <p>{this.props.auth.user.username}</p>
            )}
          </div>
        </nav>
      )

    } else {
      return <p>Please login below</p>
    }


  }

};