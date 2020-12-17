import { Person } from '../person/person';
import './person-list.css';

const PersonListComponent = (props) =>
  props.persons.map((person) => {
    return (
      <Person
        key={person.id}
        personInfo={person}
        nameChange={props.nameChange}
      ></Person>
    );
  });

export const PersonList = PersonListComponent;
