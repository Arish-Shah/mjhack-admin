import React from 'react';

const Row = ({ serial, team, onVerify }) => {
  const { id, teamName, college, email, isVerified } = team;

  const handleVerify = () => {
    onVerify(id);
  };

  let verifiedButton = isVerified ? (
    <button className="btn btn-primary" onClick={handleVerify}>
      Verified
    </button>
  ) : (
    <button className="btn btn-light" onClick={handleVerify}>
      Unverified
    </button>
  );

  return (
    <tr>
      <td>{serial}</td>
      <td>{teamName}</td>
      <td>{college}</td>
      <td>{email}</td>
      <td className="text-center">{verifiedButton}</td>
    </tr>
  );
};

export default Row;
