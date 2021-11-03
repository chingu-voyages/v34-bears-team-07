import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import TokenServices from "../tokenServices";

function Nav() {
  const handleSignOut = () => {
    TokenServices.clearAuthToken();
  };
  return (
    <div className="Nav">
      <nav>
        <ul id="menu">
          {/* <li><Link to="/">Fridge Raiders</Link></li> */}
          <li>
            <Link to="/">My Pantry</Link>
          </li>
          {/* change above route to dashboard when landing page is implemented */}
          {/* <li>
            <Link to="Grocery-List">Grocery List</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li> */}
          {!TokenServices.hasAuthToken() && (
            <li>
              <Link to="login">Login</Link>
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
