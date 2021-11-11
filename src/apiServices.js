const ApiServices = {
  postLogin({ email, password }) {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/login`, {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
      }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },

  postUser(user) {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/register`, {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(user),
      }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },

  async getItems(keyWord) {
      try {
          const res = await fetch(
              `${process.env.REACT_APP_API_ENDPOINT}/items/search/${keyWord}`
          );
          const data = await res.json();
          return data;
      } catch (e) {
          console.log(e);
      }
  },

  getUser(userID, authToken) {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${userID}`, {
          method: "GET",
          headers: {
              "content-type": "application/json",
              Authorization: authToken,
          },
      }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },

  postAddItem(userID, authToken, items) {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${userID}`, {
          method: "POST",
          headers: {
              "content-type": "application/json",
              Authorization: authToken,
          },
          body: JSON.stringify(items),
      }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },
};

export default ApiServices;