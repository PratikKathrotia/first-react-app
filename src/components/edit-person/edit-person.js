import React, { Component } from 'react';
import axios from 'axios';
import './edit-person.css';

export class EditPerson extends Component {
  state = {
    person: {
      name: '',
      age: '',
    },
    isValid: false,
    isSubmitted: false,
  };

  componentDidMount() {
    const id = this.props.match.params['id'];
    axios
      .get(`https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`)
      .then((response) => {
        this.setState({
          person: response.data,
        });
      })
      .catch((error) => console.log(error));
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
      axios
        .put(
          `https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`,
          this.state.person
        )
        .then((response) => this.props.history.push('/'))
        .catch((error) => console.log(error));
    }
  };

  render() {
    return (
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
    );
  }
}
