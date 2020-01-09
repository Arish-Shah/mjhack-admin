import React, { useEffect, createRef } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ searchText, handleSearch }) => {
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mx-auto">
          MJ Hack Revolution / <b>Admin</b>
        </span>
      </nav>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 mt-3">
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
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Team Name..."
                ref={inputRef}
                value={searchText}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
