import React, { useState } from 'react';
import placeholder from './placeholder.jpg';
import axios from 'axios';
import Header from './Header'

export default function Pug() {
  const [pug, setPug] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://dog.ceo/api/breed/pug/images/random`)
      .then(res => {

        setPug(res.data.message);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      {/* <Header /> */}
      <h1>Pug Information Page</h1>

      <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

      <div className="image-div">
        <img className="dog-image" src={
          pug === '' ? placeholder : pug
        } />
      </div>
    </div>
  )
};