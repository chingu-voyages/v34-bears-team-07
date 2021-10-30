import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";
import "./Login.css";

function Login() {
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
        console.log(res.token);
      })

      .catch((res) => {
        setError(res);
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
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
        <br />
        <button type="submit">Login</button>
        <Link to="/register">
          <button>Create New Account</button>
        </Link>
      </form>
    </React.Fragment>
  );
}

export default Login;
