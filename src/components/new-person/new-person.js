import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { PersonActions } from '../../+state';
import './new-person.css';

class NewPersonComponent extends Component {
  state = {
    person: {
      name: '',
      age: '',
    },
    isValid: false,
    isSubmitted: false,
  };

  handleInputChange = (event, input) => {
    this.setState((prevState) => {
      const updatedPerson = {
        ...prevState.person,
        [input]: event.target.value,
      };
      const isValid = !!updatedPerson.name && !!updatedPerson.age;
      return {
        person: updatedPerson,
        isValid: isValid,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
    if (this.state.isValid) {
      this.props.addPerson(this.state.person);
    }
  };

  render() {
    const content = this.props.isCreated ? (
      <Redirect to="/"></Redirect>
    ) : (
      <div className="NewPerson">
        <h3>New Person</h3>
        <form className="person_Form">
          <div className="field">
            <label className="field_Label">Name</label>
            <input
              type="text"
              className="field_Input"
              placeholder="Your name..."
              value={this.state.person.name}
              onChange={(event) => this.handleInputChange(event, 'name')}
            />
          </div>
          <div className="field">
            <label className="field_Label">Age</label>
            <input
              type="number"
              className="field_Input"
              placeholder="Your age..."
              value={this.state.person.age}
              onChange={(event) => this.handleInputChange(event, 'age')}
            />
          </div>
          <div className="field">
            <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          </div>
        </form>
        {!this.state.isValid && this.state.isSubmitted ? (
          <p>Please fill out all the fields.</p>
        ) : null}
      </div>
    );
    return content;
  }
}

const mapStateToProps = (state) => ({
  isAdding: state.person.isAdding,
  isCreated: state.person.isCreated,
  hasError: state.person.hasError,
});

const mapDispatchToProps = (dispatch) => ({
  addPerson: (person) => dispatch(PersonActions.addPerson(person)),
});

export const NewPerson = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPersonComponent);
