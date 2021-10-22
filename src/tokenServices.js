const TokenServices = {
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
    return !!TokenServices.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};

export default TokenServices;
