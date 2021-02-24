import { PersonActionTypes } from './person.actions';

const initialPersonState = {
  persons: [],
  selectedPerson: null,
  isFetching: false,
  isAdding: false,
  isCreated: false,
  isUpdating: false,
  isUpdated: false,
  hasError: false,
};

export const PersonReducer = (state = initialPersonState, action) => {
  switch (action.type) {
    case PersonActionTypes.LOAD_PERSONS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case PersonActionTypes.LOAD_PERSONS_SUCCESS:
      return {
        ...state,
        persons: action.persons,
        isFetching: false,
        hasError: false,
      };

    case PersonActionTypes.LOAD_PERSONS_ERROR:
      return {
        ...state,
        persons: [],
        isFetching: false,
        hasError: true,
      };

    case PersonActionTypes.LOAD_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case PersonActionTypes.LOAD_PERSON_SUCCESS:
      return {
        ...state,
        selectedPerson: action.person,
        isFetching: false,
        hasError: false,
      };

    case PersonActionTypes.LOAD_PERSON_ERROR:
      return {
        ...state,
        selectedPerson: null,
        isFetching: false,
        hasError: true,
      };

    case PersonActionTypes.ADD_PERSON_INIT:
      return {
        ...state,
        isAdding: false,
        isCreated: false,
      };

    case PersonActionTypes.ADD_PERSON:
      return {
        ...state,
        isAdding: true,
        isCreated: false,
        hasError: false,
      };

    case PersonActionTypes.ADD_PERSON_SUCCESS:
      return {
        ...state,
        isAdding: false,
        isCreated: true,
        hasError: false,
      };

    case PersonActionTypes.ADD_PERSON_ERROR:
      return {
        ...state,
        isAdding: false,
        isCreated: false,
        hasError: true,
      };

    case PersonActionTypes.EDIT_PERSON_INIT:
      return {
        ...state,
        isUpdating: true,
        isUpdated: false,
        hasError: false,
      };

    case PersonActionTypes.EDIT_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case PersonActionTypes.EDIT_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUpdating: false,
        isUpdated: true,
        hasError: false,
      };

    case PersonActionTypes.EDIT_PERSON_ERROR:
      return {
        ...state,
        isFetching: false,
        isUpdating: false,
        isUpdated: false,
        hasError: true,
      };

    case PersonActionTypes.DELETE_PERSON:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case PersonActionTypes.DELETE_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
      };

    case PersonActionTypes.DELETE_PERSON_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };

    default:
      return { ...state };
  }
};
