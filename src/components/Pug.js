import React from 'react';
import placeholder from './placeholder.jpg';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions/dogActions';
import Header from './Header'
import { photoPickerButton } from '@aws-amplify/ui';

function Pug(props) {

  let handleSubmit = (e) => {
    e.preventDefault()
    props.fetchDogs();
  }

  return (
    <div>
      <h1>Pug Information Page</h1>

      <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

      <div className="image-div">
        <img className="dog-image" src={
          props.dogs === '' ? placeholder : props.dogs
        } />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  dogs: state.dogs.pugs
});

export default connect(mapStateToProps, { fetchDogs })(Pug)