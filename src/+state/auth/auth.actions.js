export const AuthActionTypes = {
  AUTHENTICATE_USER: 'AUTHENTICATE_USER',
  AUTHENTICATE_USER_SUCCESS: 'AUTHENTICATE_USER_SUCCESS',
  AUTHENTICATE_USER_ERROR: 'AUTHENTICATE_USER_ERROR',
  SIGNUP_USER: 'SIGNUP_USER',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR: 'SIGNUP_USER_ERROR',
};

export const AuthActions = {
  signupUser: (data) => {
    return {
      type: AuthActionTypes.SIGNUP_USER,
      payload: data,
    };
    // return (dispatch) => {
    //   dispatch({ type: AuthActionTypes.SIGNUP_USER, payload: data });
    //   const payload = {
    //     ...data,
    //     returnSecureToken: true,
    //   };

    //   axios
    //     .post(`${ApiAuthService.getAuthApiUrl()}:signUp`, payload, {
    //       params: { key: 'AIzaSyB-PeJSKHmNx5-uDti-n0Bc5iR6Dk_QQO0' },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       ApiAuthService.setAuthToken(response.data.idToken);
    //       ApiAuthService.setRefreshToken(response.data.refreshToken);
    //       dispatch({
    //         type: AuthActionTypes.SIGNUP_USER_SUCCESS,
    //         payload: {
    //           idToken: response.data.idToken,
    //           refreshToken: response.data.refreshToken,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       const msg = error.response.data.error.message;
    //       dispatch({ type: AuthActionTypes.SIGNUP_USER_ERROR, payload: msg });
    //     });
    // };
  },

  authenticateUser: (data) => {
    return {
      type: AuthActionTypes.AUTHENTICATE_USER,
      payload: data,
    };
    // return (dispatch) => {
    //   dispatch({ type: AuthActionTypes.AUTHENTICATE_USER, payload: data });
    //   const payload = {
    //     ...data,
    //     returnSecureToken: true,
    //   };

    //   axios
    //     .post(`${ApiAuthService.getAuthApiUrl()}:signInWithPassword`, payload, {
    //       params: { key: 'AIzaSyB-PeJSKHmNx5-uDti-n0Bc5iR6Dk_QQO0' },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       ApiAuthService.setAuthToken(response.data.idToken);
    //       ApiAuthService.setRefreshToken(response.data.refreshToken);
    //       dispatch({
    //         type: AuthActionTypes.AUTHENTICATE_USER_SUCCESS,
    //         payload: {
    //           idToken: response.data.idToken,
    //           refreshToken: response.data.refreshToken,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       const msg = error.response.data.error.message;
    //       dispatch({
    //         type: AuthActionTypes.AUTHENTICATE_USER_ERROR,
    //         payload: msg,
    //       });
    //     });
    // };
  },
};
