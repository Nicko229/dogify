import React, { useState } from 'react';
import breedPlaceholder from './breedPlaceholder.jpg';
import axios from 'axios';
import Header from './Header'

export default function AllBreeds() {
  const [dog, setDog] = useState('')
  const [breed, setBreed] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => {

        setDog(data.message);
      })
      .catch(error => {
        console.log(error)
      })
  }

  let handleChange = (e) => {
    setBreed(e.target.value)
  }

  return (
    <div>
      {/* <Header /> */}
      <h1>Information on All Breeds</h1>
      <input className="text-input" type="text" onChange={handleChange} />

      <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

      <div className="image-div">
        <img className="dog-image" src={
          dog === '' ? breedPlaceholder : dog
        } />
      </div>
    </div>
  )
};