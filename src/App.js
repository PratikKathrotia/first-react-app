import { Component } from 'react';
import { Header } from './components/header/header';
import { PersonList } from './components/person-list/person-list';
import './App.css';

export class App extends Component {
  state = {
    persons: [
      { id: 'pr1', name: 'Pratik', age: 26 },
      { id: 'kr2', name: 'Karan', age: 27 },
      { id: 'kv3', name: 'Kevin', age: 21 },
      { id: 'ak4', name: 'Akshar', age: 20 },
    ],
    showPersons: false,
  };

  handleNameChanged = (event, personId) => {
    const newPersons = this.state.persons.slice().map((p) => {
      return p.id === personId ? { ...p, name: event.target.value } : p;
    });
    this.setState({ persons: newPersons });
  };

  handlePersonsToggle = () => {
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons,
    }));
  };

  render() {
    return (
      <div className="App">
        <Header personsToggle={this.handlePersonsToggle}></Header>
        {this.state.showPersons ? (
          <PersonList
            persons={this.state.persons}
            nameChange={this.handleNameChanged}
          ></PersonList>
        ) : null}
      </div>
    );
  }
}
