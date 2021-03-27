import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { AuthReducer } from './auth/auth.reducer';
import { PersonReducer } from './person/person.reducer';
import { watchAuth } from './auth/auth.saga';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    auth: AuthReducer,
    person: PersonReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);

export default store;
