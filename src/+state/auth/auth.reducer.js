import { AuthActionTypes } from './auth.actions';

const initialAuthState = {
  isLoading: false,
  hasError: false,
  error: null,
  apiToken: null,
  refreshToken: null,
};

export const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGNUP_USER:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };

    case AuthActionTypes.SIGNUP_USER_SUCCESS:
      const payload = action.payload;
      return {
        ...state,
        isLoading: false,
        apiToken: payload.idToken,
        refreshToken: payload.refreshToken,
      };

    case AuthActionTypes.SIGNUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };

    case AuthActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };

    case AuthActionTypes.AUTHENTICATE_USER_SUCCESS:
      const authData = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        apiToken: authData.idToken,
        refreshToken: authData.refreshToken,
      };

    case AuthActionTypes.AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
