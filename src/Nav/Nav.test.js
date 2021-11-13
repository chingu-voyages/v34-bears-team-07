import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='Nav'>
        <nav>
            <ul id="menu">
                <li><Link to="discover">Discover</Link></li>
                <li><Link to="create">Create</Link></li>          
                <li><Link to="/">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;