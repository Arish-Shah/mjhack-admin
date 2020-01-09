import React from 'react';

const Row = ({ serial, team }) => {
  const { teamName, college, email, isVerified } = team;
  let verifiedButton = isVerified ? (
    <button className="btn btn-primary">Verified</button>
  ) : (
    <button className="btn btn-light">Unverified</button>
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
