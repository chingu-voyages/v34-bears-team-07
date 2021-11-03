import React, { useState } from "react";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();
  const [error, setError] = useState("");
  // Make react controlled form

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { username, email, password } = e.target;
    ApiServices.postUser({
      username: username.value,
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        email.value = "";
        password.value = "";
        TokenServices.saveAuthToken(res.token);
        console.log(res.token);
        props.setId(TokenServices.decodeToken(res.token).id);
        props.setToken(res.token);
        history.push("/");
      })

      .catch((res) => {
        setError(res);
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <section className="main">
        <div>
          <header role="banner">
            <h1>Sign Up</h1>
          </header>
        </div>
        <div className="signup center">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="John Doe"
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="meow@meow.com"
              />
              <label htmlFor="password" id="password" name="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Meow"
              />
            </div>
            <div className="center">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
