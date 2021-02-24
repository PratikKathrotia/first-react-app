import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { PersonActions } from '../../+state';
import './edit-person.css';

class EditPersonComponent extends Component {
  state = {
    person: this.props.selectedPerson,
    isValid: false,
    isSubmitted: false,
  };

  componentDidMount() {
    const id = this.props.match.params['id'];
    if (!!id) {
      this.props.loadPerson(id);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.selectedPerson && this.props.selectedPerson) ||
      prevProps.selectedPerson.id !== this.props.selectedPerson.id
    ) {
      this.setState({ person: this.props.selectedPerson });
    }
  }

  componentWillUnmount() {
    this.setState(null);
  }

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
      const id = this.props.match.params['id'];
      this.props.editPerson(id, this.state.person);
    }
  };

  render() {
    const content = this.props.isUpdated ? (
      <Redirect to="/"></Redirect>
    ) : this.state.person ? (
      <div className="EditPerson">
        <h3>Edit Person</h3>
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
    ) : null;
    return content;
  }
}

const mapStateToProps = (state) => ({
  selectedPerson: state.person.selectedPerson,
  isUpdated: state.person.isUpdated,
});

const mapDispatchToProps = (dispatch) => ({
  loadPerson: (id) => dispatch(PersonActions.loadPerson(id)),
  editPerson: (id, person) => dispatch(PersonActions.editPerson(id, person)),
});

export const EditPerson = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPersonComponent);
