import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">

          <Link className="navbar-brand" to="/">Click Bait</Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-item" to="/all-colors">All Colors</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navigation;
