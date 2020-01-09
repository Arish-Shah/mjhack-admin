import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink to="/all" exact replace className="nav-link">
          All Teams
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/verified" exact replace className="nav-link">
          Verified Teams
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
