import React, { createRef, useEffect } from 'react';
import Row from './Row';
import Navigation from '../Navigation';

const Teams = ({ teams, searchText, onSearch }) => {
  let displayText;
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  if (teams[0]) {
    displayText = teams.map((team, i) => (
      <Row key={i} serial={i + 1} team={team} />
    ));
  } else {
    displayText = (
      <tr>
        <td colSpan="5" className="text-center py-4 text-primary">
          <div className="spinner-border"></div>
        </td>
      </tr>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 mt-3">
          <Navigation />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Team Name..."
              ref={inputRef}
              value={searchText}
              onChange={onSearch}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table my-3 table-bordered">
          <thead>
            <tr className="bg-light">
              <th>#</th>
              <th>Team Name</th>
              <th>College</th>
              <th>Email</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>{displayText}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
