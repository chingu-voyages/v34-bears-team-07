import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";
import "./Login.css";

function Login(props) {
  // const history = useHistory();
  const [error, setError] = useState("");
  // Make react controlled form

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { email, password } = e.target;
    ApiServices.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        TokenServices.saveAuthToken(res.token);
        props.setId(TokenServices.decodeToken(res.token).id);
        props.setToken(res.token);
        history.push("/dashboard");
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
            <h1>Login</h1>
          </header>
        </div>
        <div className="login center">
          <form onSubmit={handleSubmit}>
            <div className="login-container">
              <label className="hide" htmlFor="email">
                Email
              </label>
              <input type="text" id="email" name="email" placeholder="Email" />
              <label
                className="hide"
                htmlFor="password"
                id="password"
                name="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <div className="center">
                <button type="submit">Login</button>
              </div>
            </div>
            <div className="center">
              <Link to="/register">
                <button className="register">Create New Account</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Login;
