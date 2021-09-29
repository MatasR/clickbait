import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav className="navbar navbar-light bg-white shadow-sm mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Clickbait</Link>
        </div>
      </nav>
    );
}

export default Navigation;
