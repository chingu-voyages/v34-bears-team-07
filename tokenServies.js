export default TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};
