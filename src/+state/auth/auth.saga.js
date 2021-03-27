import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

import { AuthActionTypes } from './auth.actions';
import { ApiAuthService } from '../../services/api-auth.service';

function* signupUserSaga(action) {
  const payload = {
    ...action.payload,
    returnSecureToken: true,
  };

  try {
    const response = yield axios.post(
      `${ApiAuthService.getAuthApiUrl()}:signUp`,
      payload,
      {
        params: { key: 'AIzaSyB-PeJSKHmNx5-uDti-n0Bc5iR6Dk_QQO0' },
      }
    );

    ApiAuthService.setAuthToken(response.data.idToken);
    ApiAuthService.setRefreshToken(response.data.refreshToken);

    yield put({
      type: AuthActionTypes.SIGNUP_USER_SUCCESS,
      payload: {
        idToken: response.data.idToken,
        refreshToken: response.data.refreshToken,
      },
    });
  } catch (error) {
    const msg = error.response.data.error.message;
    yield put({ type: AuthActionTypes.SIGNUP_USER_ERROR, payload: msg });
  }
}

function* authenticateUserSaga(action) {
  const payload = {
    ...action.payload,
    returnSecureToken: true,
  };

  try {
    const response = yield axios.post(
      `${ApiAuthService.getAuthApiUrl()}:signInWithPassword`,
      payload,
      {
        params: { key: 'AIzaSyB-PeJSKHmNx5-uDti-n0Bc5iR6Dk_QQO0' },
      }
    );

    ApiAuthService.setAuthToken(response.data.idToken);
    ApiAuthService.setRefreshToken(response.data.refreshToken);

    yield put({
      type: AuthActionTypes.AUTHENTICATE_USER_SUCCESS,
      payload: {
        idToken: response.data.idToken,
        refreshToken: response.data.refreshToken,
      },
    });
  } catch (error) {
    const msg = error.response.data.error.message;
    yield put({
      type: AuthActionTypes.AUTHENTICATE_USER_ERROR,
      payload: msg,
    });
  }
}

export function* watchAuth() {
  yield takeEvery(AuthActionTypes.SIGNUP_USER, signupUserSaga);
  yield takeEvery(AuthActionTypes.AUTHENTICATE_USER, authenticateUserSaga);
}
