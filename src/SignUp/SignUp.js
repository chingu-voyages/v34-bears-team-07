import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";
import "./SignUp.css";

function SignUp() {
//   const [error, setError] = useState("");
//   // Make react controlled form

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     const { email, password } = e.target;
//     ApiServices.postLogin({
//       email: email.value,
//       password: password.value,
//     })
//       .then((res) => {
//         email.value = "";
//         password.value = "";
//         TokenServices.saveAuthToken(res.token);
//         console.log(res.token);
//       })

//       .catch((res) => {
//         setError(res);
//         console.log(error);
//       });
//   };
  return (
    <React.Fragment>
      <section className="main">
        <div>
          <header role="banner">
            <h1>Register</h1>
          </header>
        </div>
        <div className="login center">
          <form 
        //   onSubmit={handleSubmit}
          >
            <div>
              <div className="login-container">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                {/* <label htmlFor="password" id="password" name="password">
                  Password
                </label> */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="center">
                  <button type="submit">Register</button>
                </div>
              </div>
            </div>
            <div className="center"></div>
            <p className="center">Already have an account?</p>
            <div className="center">
              <Link to="/login">
                <button className="register">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
