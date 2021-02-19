import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../+state/actions';
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
    console.log('Adding this to check github password/token');
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
  persons: state.persons,
  isPersonsFetching: state.isFetching,
  personsHasError: state.hasError,
});

const mapDispatchToProps = (dispatch) => ({
  loadPersons: () => dispatch(actions.loadPersons()),
  addPersonInit: () => dispatch({ type: actions.ActionTypes.ADD_PERSON_INIT }),
  editPersonInit: () => dispatch({ type: actions.ActionTypes.EDIT_PERSON_INIT }),
  deletePerson: (id) => dispatch(actions.deletePerson(id)),
});

export const PersonList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonListComponent);
