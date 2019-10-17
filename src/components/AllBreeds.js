import React from 'react';
import { connect } from 'react-redux';
import { fetchAllBreeds, breedInput } from '../actions/dogActions';
import breedPlaceholder from './breedPlaceholder.jpg';
import AuthorizationError from './AuthorizationError';
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

  console.log("props.auth.user.username AllBreeds", props.auth.user.username)

  if (props.auth.user.username === "User1") {
    return (
      <div className="canine-grandparent">
        <div className="canine-parent">
          <h1 className="canine-header">All About Dogs</h1>
          <p className="canine-text">
            The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species) is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore. The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct. The dog was the first species to be domesticatedand has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.</p>

          <p className="canine-text">Their long association with humans has led dogs to be uniquely attuned to human behavior and they are able to thrive on a starch-rich diet that would be inadequate for other canid species. Dogs vary widely in shape, size and colors. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of "man's best friend".</p>

          <p className="canine-text">Please type the breed of dog you like and click "Submit" to see pictures below.</p>

          <div className="canine-image-div">
            <input className="text-input" type="text" onChange={handleChange} />

            <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

            <div className="image-div">
              <img className="dog-image" src={props.dogs === undefined ? breedPlaceholder : props.dogs
              } />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <AuthorizationError />
  }


};

const mapStateToProps = state => ({
  dogs: state.dogs.allBreeds,
  breed: state.dogs.breed
});

export default connect(mapStateToProps, { fetchAllBreeds, breedInput })(AllBreeds)