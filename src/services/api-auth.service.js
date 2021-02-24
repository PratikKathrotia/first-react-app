/**
 * Service to handle all authentication and api related logic
 */
export const ApiAuthService = (() => {
  const API_TOKEN_KEY = 'react:api_token';
  const API_REFRESH_TOKEN_KEY = 'react:api_refresh_token';
  const BASE_API_URL = 'https://react-demo-b8473-default-rtdb.firebaseio.com';
  const AUTH_API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

  /**
   * Save auth token to local storage
   * @param {string} token
   */
  function setAuthToken(token) {
    if (!!token) {
      localStorage.setItem(API_TOKEN_KEY, token);
    }
  }

  /**
   * Get auth token from lcoal storage
   * @returns {string}
   */
  function getAuthToken() {
    return localStorage.getItem(API_TOKEN_KEY);
  }

  /**
   * Save auth refresh token to local storage
   * @param {string} token
   */
  function setRefreshToken(token) {
    if (!!token) {
      localStorage.setItem(API_REFRESH_TOKEN_KEY, token);
    }
  }

  /**
   * Get auth refresh token from lcoal storage
   * @returns {string}
   */
  function getRefreshToken() {
    return localStorage.getItem(API_REFRESH_TOKEN_KEY);
  }

  /**
   * Get base api url for database calls
   * @returns {string}
   */
  function getBaseApiUrl() {
    return BASE_API_URL;
  }

  /**
   * Get auth api url for datbase calls
   * @returns {string}
   */
  function getAuthApiUrl() {
    return AUTH_API_URL;
  }

  return {
    getAuthToken,
    setAuthToken,
    setRefreshToken,
    getRefreshToken,
    getBaseApiUrl,
    getAuthApiUrl,
  };
})();
