import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import TokenServices from "../tokenServices";

function Nav(props) {
  const handleSignOut = () => {
    TokenServices.clearAuthToken();
    props.setItems([]);
    props.setId("");
    props.setToken("");
    props.setSearchTerm("");
    window.location = "/";
  };
  return (
    <div className="Nav">
      <nav>
        <ul id="menu">
          {TokenServices.hasAuthToken() && (
            <li>
              <Link to="/dashboard">My Pantry</Link>
            </li>
          )}
          {TokenServices.hasAuthToken() && (
            <li>
              <Link to="/grocery-List">Grocery List</Link>
            </li>
          )}
          {!TokenServices.hasAuthToken() && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {TokenServices.hasAuthToken() && (
            <li>
              <Link to="/" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
