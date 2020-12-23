import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Person } from '../person/person';
import './person-list.css';

export class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    this.loadPersons();
  }

  loadPersons = () => {
    axios
      .get('https://react-demo-b8473-default-rtdb.firebaseio.com/persons.json')
      .then((response) => {
        const mappedPersons = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        this.setState({ persons: mappedPersons });
      })
      .catch((error) => error);
  };

  handlePersonEdit = (id) => {
    this.props.history.push(`/persons/${id}`);
  };

  handlePersonDelete = (id) => {
    axios
      .delete(
        `https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`
      )
      .then((rsp) => this.loadPersons())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Link to="/new-person">
          <button className="NewButton">Add Person</button>
        </Link>
        <div className="PersonsContainer">
          {this.state.persons.map((person) => {
            return (
              <Person
                key={person.id}
                personInfo={person}
                edit={() => this.handlePersonEdit(person.id)}
                delete={() => this.handlePersonDelete(person.id)}
              ></Person>
            );
          })}
        </div>
      </div>
    );
  }
}
