import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header, PersonList, NewPerson, EditPerson } from './components';
// import asyncComponent from './components/hoc/asyncComponent';
import './App.css';

// const AsyncNewPerson = asyncComponent({
//   import: () => import('./components/new-person/new-person'),
//   name: 'NewPerson',
// });

// const AsyncEditPerson = asyncComponent({
//   import: () => import('./components/edit-person/edit-person'),
//   name: 'EditPerson',
// });

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/test">
              <div>
                <h2>Congratulations! Routing works.</h2>
              </div>
            </Route>
            <Route path="/new-person" component={NewPerson} />
            <Route path="/persons/:id" component={EditPerson} />
            <Route path="/persons" exact component={PersonList} />
            <Redirect from="/" to="/persons" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
