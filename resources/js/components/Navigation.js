import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navbar navbar-light bg-white shadow-sm mb-3">
        <div className="container">

          <Link className="navbar-brand" to="/">Clickbait</Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-item" to="/new-color">Add Color</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navigation;
