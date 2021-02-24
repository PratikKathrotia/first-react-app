import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PersonList, NewPerson, EditPerson, Auth, Header } from './components';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/new-person" component={NewPerson} />
          <Route path="/persons/:id" component={EditPerson} />
          <Route path="/auth" component={Auth} />
          <Route path="/persons" exact component={PersonList} />
          <Redirect from="/" to="/persons" />
        </Switch>
      </div>
    );
  }
}
