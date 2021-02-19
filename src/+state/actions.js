import axios from 'axios';

export const ActionTypes = {
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

export const loadPersons = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_PERSONS });
    axios
      .get('https://react-demo-b8473-default-rtdb.firebaseio.com/persons.json')
      .then((response) => {
        const mappedPersons = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        dispatch({ type: ActionTypes.LOAD_PERSONS_SUCCESS, persons: mappedPersons });
      })
      .catch((error) => dispatch({ type: ActionTypes.LOAD_PERSONS_ERROR }));
  };
};

export const loadPerson = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_PERSON });
    axios
      .get(`https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`)
      .then((response) =>
        dispatch({
          type: ActionTypes.LOAD_PERSON_SUCCESS,
          person: { ...response.data, id: id },
        })
      )
      .catch((error) => dispatch({ type: ActionTypes.LOAD_PERSON_ERROR }));
  };
};

export const addPerson = (newPerson) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ADD_PERSON });
    axios
      .post(
        'https://react-demo-b8473-default-rtdb.firebaseio.com/persons.json',
        newPerson
      )
      .then((response) => dispatch({ type: ActionTypes.ADD_PERSON_SUCCESS }))
      .catch((error) => dispatch({ type: ActionTypes.ADD_PERSON_ERROR }));
  };
};

export const editPerson = (id, updatedPerson) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.EDIT_PERSON });
    axios
      .put(
        `https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`,
        updatedPerson
      )
      .then((response) => dispatch({ type: ActionTypes.EDIT_PERSON_SUCCESS }))
      .catch((error) => dispatch({ type: ActionTypes.EDIT_PERSON_ERROR }));
  };
};

export const deletePerson = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_PERSON });
    axios
      .delete(
        `https://react-demo-b8473-default-rtdb.firebaseio.com/persons/${id}.json`
      )
      .then((rsp) => {
        dispatch({ type: ActionTypes.DELETE_PERSON_SUCCESS });
        dispatch(loadPersons());
      })
      .catch((err) => dispatch({ type: ActionTypes.DELETE_PERSON_ERROR }));
  };
};
