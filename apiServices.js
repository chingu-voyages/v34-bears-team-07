const AuthApiService = {
  postLogin({ username, password }) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postUser(user) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default AuthApiService;
