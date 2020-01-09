import React from 'react';
import Row from './Row';

const Teams = ({ teams }) => {
  let displayText;

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
      <div className="table-responsive">
        <table className="table mt-1 table-bordered">
          <thead>
            <tr className="bg-light">
              <th>#</th>
              <th>Team Name</th>
              <th>College</th>
              <th>Email</th>
              <th className="text-center">Verification</th>
            </tr>
          </thead>
          <tbody>{displayText}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
