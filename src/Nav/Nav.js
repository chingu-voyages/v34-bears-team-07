import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul id="menu">
          {/* <li><Link to="/">Fridge Raiders</Link></li> */}
          <li>
            <Link to="/">My Pantry</Link>
          </li>
          {/* change above route to dashboard when landing page is implemented */}
          <li>
            <Link to="Grocery-List">Grocery List</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
