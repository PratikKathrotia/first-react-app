import { ActionTypes } from './actions';

const initialState = {
  persons: [],
  selectedPerson: null,
  isFetching: false,
  isAdding: false,
  isCreated: false,
  isUpdating: false,
  isUpdated: false,
  hasError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PERSONS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case ActionTypes.LOAD_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.persons,
        isFetching: false,
        hasError: false,
      };

    case ActionTypes.LOAD_PERSONS_ERROR:
      return {
        ...state,
        persons: [],
        isFetching: false,
        hasError: true,
      };

    case ActionTypes.LOAD_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case ActionTypes.LOAD_PERSON_SUCCESS:
      return {
        ...state,
        selectedPerson: action.person,
        isFetching: false,
        hasError: false,
      };

    case ActionTypes.LOAD_PERSON_ERROR:
      return {
        ...state,
        selectedPerson: null,
        isFetching: false,
        hasError: true,
      };

    case ActionTypes.ADD_PERSON_INIT:
      return {
        ...state,
        isAdding: false,
        isCreated: false,
      };

    case ActionTypes.ADD_PERSON:
      return {
        ...state,
        isAdding: true,
        isCreated: false,
        hasError: false,
      };

    case ActionTypes.ADD_PERSON_SUCCESS:
      return {
        ...state,
        isAdding: false,
        isCreated: true,
        hasError: false,
      };

    case ActionTypes.ADD_PERSON_ERROR:
      return {
        ...state,
        isAdding: false,
        isCreated: false,
        hasError: true,
      };

    case ActionTypes.EDIT_PERSON_INIT:
      return {
        ...state,
        isUpdating: true,
        isUpdated: false,
        hasError: false,
      };

    case ActionTypes.EDIT_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case ActionTypes.EDIT_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUpdating: false,
        isUpdated: true,
        hasError: false,
      };

    case ActionTypes.EDIT_PERSON_ERROR:
      return {
        ...state,
        isFetching: false,
        isUpdating: false,
        isUpdated: false,
        hasError: true,
      };

    case ActionTypes.DELETE_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case ActionTypes.DELETE_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
      };

    case ActionTypes.DELETE_PERSON_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };

    default:
      return { ...state };
  }
};

export default reducer;
