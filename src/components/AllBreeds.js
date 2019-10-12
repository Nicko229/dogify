import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, breedInput } from '../actions/dogActions';
import breedPlaceholder from './breedPlaceholder.jpg';
import Header from './Header'
import { getPortPromise } from 'portfinder';
import './AllBreeds.css';

function AllBreeds(props) {

  let handleSubmit = (e) => {
    e.preventDefault()
    props.fetchAllBreeds(props.breed);
  }

  let handleChange = (e) => {
    e.preventDefault()
    props.breedInput(e)
  }

  return (
    <div>
      <h1>Information on All Breeds</h1>
      <input className="text-input" type="text" onChange={handleChange} />

      <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

      <div className="image-div">
        <img className="dog-image" src={props.dogs === undefined ? breedPlaceholder : props.dogs
        } />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  dogs: state.dogs.allBreeds,
  breed: state.dogs.breed
});

export default connect(mapStateToProps, { fetchAllBreeds, breedInput })(AllBreeds)