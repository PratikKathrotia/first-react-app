import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PersonActionTypes, PersonActions } from '../../+state';
import { Person } from '../person/person';
import './person-list.css';

class PersonListComponent extends Component {
  componentDidMount() {
    this.props.loadPersons();
  }

  handlePersonEdit = (id) => {
    this.props.editPersonInit();
    this.props.history.push(`/persons/${id}`);
  };

  handleNewButtonClick = () => {
    this.props.addPersonInit();
    this.props.history.push('/new-person');
  };

  render() {
    return (
      <div>
        <button className="NewButton" onClick={this.handleNewButtonClick}>
          Add Person
        </button>
        <div className="PersonsContainer">
          {this.props.persons.map((person) => {
            return (
              <Person
                key={person.id}
                personInfo={person}
                edit={() => this.handlePersonEdit(person.id)}
                delete={() => this.props.deletePerson(person.id)}
              ></Person>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.person.persons,
  isPersonsFetching: state.person.isFetching,
  personsHasError: state.person.hasError,
});

const mapDispatchToProps = (dispatch) => ({
  loadPersons: () => dispatch(PersonActions.loadPersons()),
  addPersonInit: () => dispatch({ type: PersonActionTypes.ADD_PERSON_INIT }),
  editPersonInit: () => dispatch({ type: PersonActionTypes.EDIT_PERSON_INIT }),
  deletePerson: (id) => dispatch(PersonActions.deletePerson(id)),
});

export const PersonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonListComponent);
