import React from 'react';

const Row = ({ serial, team }) => {
  const { teamName, college, email } = team;

  return (
    <tr>
      <td>{serial}</td>
      <td>{teamName}</td>
      <td>{college}</td>
      <td>{email}</td>
    </tr>
  );
};

export default Row;
