import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    console.log("this.props.auth.akfdas", this.props.auth)
    return (
      <div className="user-parent">
        <h1>User Info</h1>
        <p>Username: {this.props.auth.user.username}</p>
        <p>Email: {this.props.auth.user.attributes.email}</p>
        <p>Email Verified: {this.props.auth.user.attributes.email_verified}</p>
      </div>
    )
  }

}

export default User;