import React from 'react';

const Row = ({ serial, team, onCheckIn }) => {
  const { id, teamName, college, email, isCheckedIn } = team;

  const handleVerify = () => {
    onCheckIn(id);
  };

  let verifiedButton = isCheckedIn ? (
    <button className="btn btn-success" onClick={handleVerify}>
      Checked In
    </button>
  ) : (
    <button className="btn btn-light" onClick={handleVerify}>
      Checked Out
    </button>
  );

  const bgClasses = isCheckedIn ? 'table-success' : '';

  return (
    <tr className={bgClasses}>
      <td>{serial}</td>
      <td>{teamName}</td>
      <td>{college}</td>
      <td>{email}</td>
      <td className="text-center">{verifiedButton}</td>
    </tr>
  );
};

export default Row;
