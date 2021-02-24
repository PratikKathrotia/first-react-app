import axios from 'axios';

import { ApiAuthService } from '../../services/api-auth.service';

export const PersonActionTypes = {
  AUTHENTICATE_USER: 'AUTHENTICATE_USER',
  AUTHENTICATE_USER_SUCCESS: 'AUTHENTICATE_USER_SUCCESS',
  AUTHENTICATE_USER_ERROR: 'AUTHENTICATE_USER_ERROR',
  SIGNUP_USER: 'SIGNUP_USER',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR: 'SIGNUP_USER_ERROR',
  LOAD_PERSONS: 'LOAD_PERSONS',
  LOAD_PERSONS_SUCCESS: 'LOAD_PERSONS_SUCCESS',
  LOAD_PERSONS_ERROR: 'LOAD_PERSONS_ERROR',
  LOAD_PERSON: 'LOAD_PERSON',
  LOAD_PERSON_SUCCESS: 'LOAD_PERSON_SUCCESS',
  LOAD_PERSON_ERROR: 'LOAD_PERSON_ERROR',
  ADD_PERSON_INIT: 'ADD_PERSON_INIT',
  ADD_PERSON: 'ADD_PERSON',
  ADD_PERSON_SUCCESS: 'ADD_PERSON_SUCCESS',
  ADD_PERSON_ERROR: 'ADD_PERSON_ERROR',
  EDIT_PERSON_INIT: 'EDIT_PERSON_INIT',
  EDIT_PERSON: 'EDIT_PERSON',
  EDIT_PERSON_SUCCESS: 'EDIT_PERSON_SUCCESS',
  EDIT_PERSON_ERROR: 'EDIT_PERSON_ERROR',
  DELETE_PERSON: 'DELETE_PERSON',
  DELETE_PERSON_SUCCESS: 'DELETE_PERSON_SUCCESS',
  DELETE_PERSON_ERROR: 'DELETE_PERSON_ERROR',
};

export const PersonActions = {
  loadPersons: () => {
    return (dispatch) => {
      dispatch({ type: PersonActionTypes.LOAD_PERSONS });
      axios
        .get(`${ApiAuthService.getBaseApiUrl()}/persons.json`)
        .then((response) => {
          const mappedPersons = Object.keys(response.data).map((key) => ({
            ...response.data[key],
            id: key,
          }));
          dispatch({
            type: PersonActionTypes.LOAD_PERSONS_SUCCESS,
            persons: mappedPersons,
          });
        })
        .catch((error) => dispatch({ type: PersonActionTypes.LOAD_PERSONS_ERROR }));
    };
  },

  loadPerson: (id) => {
    return (dispatch) => {
      dispatch({ type: PersonActionTypes.LOAD_PERSON });
      axios
        .get(`${ApiAuthService.getBaseApiUrl()}/persons/${id}.json`)
        .then((response) =>
          dispatch({
            type: PersonActionTypes.LOAD_PERSON_SUCCESS,
            person: { ...response.data, id: id },
          })
        )
        .catch((error) => dispatch({ type: PersonActionTypes.LOAD_PERSON_ERROR }));
    };
  },

  addPerson: (newPerson) => {
    return (dispatch) => {
      dispatch({ type: PersonActionTypes.ADD_PERSON });
      axios
        .post(`${ApiAuthService.getBaseApiUrl()}/persons.json`, newPerson)
        .then((response) => dispatch({ type: PersonActionTypes.ADD_PERSON_SUCCESS }))
        .catch((error) => dispatch({ type: PersonActionTypes.ADD_PERSON_ERROR }));
    };
  },

  editPerson: (id, updatedPerson) => {
    return (dispatch) => {
      dispatch({ type: PersonActionTypes.EDIT_PERSON });
      axios
        .put(`${ApiAuthService.getBaseApiUrl()}/persons/${id}.json`, updatedPerson)
        .then((response) =>
          dispatch({ type: PersonActionTypes.EDIT_PERSON_SUCCESS })
        )
        .catch((error) => dispatch({ type: PersonActionTypes.EDIT_PERSON_ERROR }));
    };
  },

  deletePerson: (id) => {
    return (dispatch) => {
      dispatch({ type: PersonActionTypes.DELETE_PERSON });
      axios
        .delete(`${ApiAuthService.getBaseApiUrl()}/persons/${id}.json`)
        .then((rsp) => {
          dispatch({ type: PersonActionTypes.DELETE_PERSON_SUCCESS });
          dispatch(PersonActions.loadPersons());
        })
        .catch((err) => dispatch({ type: PersonActionTypes.DELETE_PERSON_ERROR }));
    };
  },
};
