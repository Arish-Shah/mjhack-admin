import React from 'react';
import Row from './Row';

const Teams = ({ total, teams, onCheckIn }) => {
  let displayText;

  if (teams[0]) {
    displayText = teams.map((team, i) => (
      <Row key={i} serial={i + 1} team={team} onCheckIn={onCheckIn} />
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

  let present = teams.filter(team => team.isCheckedIn).length;

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table mt-1 table-bordered">
          <caption>
            Total: {total} / Present: {present}
          </caption>
          <thead>
            <tr className="bg-light">
              <th>#</th>
              <th>Team Name</th>
              <th>College</th>
              <th>Email</th>
              <th className="text-center">Checked</th>
            </tr>
          </thead>
          <tbody>{displayText}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
