import React from 'react';
import placeholder from './placeholder.jpg';
import { connect } from 'react-redux';
import { fetchPugs } from '../actions/dogActions';
import './Pug.css';

function Pug(props) {

  let handleSubmit = (e) => {
    e.preventDefault()
    props.fetchPugs();
  }

  return (
    <div className="pug-grandparent">
      <div className="pug-parent">
        <h1 className="pug-header">All About Pugs</h1>
        <p className="pug-text">The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.</p>

        <p className="pug-text">Pugs were brought from China to Europe in the sixteenth century and were popularized in Western Europe by the House of Orange of the Netherlands, and the House of Stuart. In the United Kingdom, in the nineteenth century, Queen Victoria developed a passion for pugs which she passed on to other members of the Royal family.</p>

        <p className="pug-text">Pugs are known for being sociable and gentle companion dogs. The American Kennel Club describes the breed's personality as "even-tempered and charming". Pugs remain popular into the twenty-first century, with some famous celebrity owners. A pug was judged Best in Show at the World Dog Show in 2004.</p>

        <p className="pug-text">Click the "Submit" button below to see pictures of different pugs!</p>

        <div className="pug-image-div">
          <input onClick={handleSubmit} className="submit-input" type="submit" value="Submit" />

          <div className="image-div">
            <img className="pug-image" className="dog-image" src={
              props.dogs === '' ? placeholder : props.dogs
            } />
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  dogs: state.dogs.pugs
});

export default connect(mapStateToProps, { fetchPugs })(Pug)