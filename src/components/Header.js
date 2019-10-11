import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

export default function AllBreeds() {
  return (
    <div className="header-parent">
      <NavLink to="/">Pugs</NavLink>
      <NavLink to="/all-breeds">All Breeds</NavLink>
      <NavLink to="/login">Logout</NavLink>

    </div>
  )
};