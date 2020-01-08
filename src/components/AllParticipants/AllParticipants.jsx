import React from 'react';

const AllParticipants = ({ participants }) => {
  return participants[0] ? (
    <div className="container">
      <table className="table my-4 table-bordered">
        <thead>
          <tr className="bg-light">
            <th>#</th>
            <th>Team Name</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{participant.college}</td>
              <td>{participant.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container my-4">Loading...</div>
  );
};

export default AllParticipants;
