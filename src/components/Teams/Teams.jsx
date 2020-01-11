import React from 'react';
import Row from './Row';

const Teams = ({ teams, onVerify }) => {
  let displayText;

  if (teams[0]) {
    displayText = teams.map((team, i) => {
      let position = i <= teams.length / 2 ? 'down' : 'up';
      return (
        <Row
          key={i}
          serial={i + 1}
          team={team}
          onVerify={onVerify}
          position={position}
        />
      );
    });
  } else {
    displayText = (
      <tr>
        <td colSpan="6" className="text-center py-4 text-primary">
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
              <th className="text-center">Member</th>
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
