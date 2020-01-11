import React, { useState } from 'react';

const Row = ({ serial, team, onCheckIn, position }) => {
  const [showDetails, setShowDetails] = useState(false);

  const {
    id,
    teamName,
    college,
    email,
    memberNames,
    memberPhones,
    isCheckedIn
  } = team;

  const handleVerify = () => {
    onCheckIn(id);
  };

  let verifiedButton = isCheckedIn ? (
    <button className="btn btn-success" onClick={handleVerify}>
      Present
    </button>
  ) : (
    <button className="btn btn-light" onClick={handleVerify}>
      Absent
    </button>
  );

  const handleShow = () => {
    const updatedShowDetails = !showDetails;
    setShowDetails(updatedShowDetails);
  };

  const bgClasses = isCheckedIn ? 'table-success' : '';
  const showClasses = showDetails ? 'show' : '';
  const dropdownButtonColor = isCheckedIn ? 'btn-success' : 'btn-light';
  const positionClass = position === 'down' ? 'dropdown' : 'dropup';

  let displayDetails = (
    <div className={positionClass}>
      <button
        className={`btn ${dropdownButtonColor} dropdown-toggle`}
        onMouseEnter={handleShow}
        onMouseLeave={handleShow}
      >
        Members
      </button>
      <div className={`dropdown-menu dropdown-menu-right ${showClasses}`}>
        <span className="dropdown-item bg-white">
          <table className="table table-sm table-borderless">
            <tbody>
              {memberNames.map((mn, index) => {
                const mp = memberPhones[index];
                return (
                  <tr key={index}>
                    <td className="font-weight-bold">{mn}</td>
                    <td>{mp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </span>
      </div>
    </div>
  );

  return (
    <tr className={bgClasses}>
      <td>{serial}</td>
      <td>{teamName}</td>
      <td>{college}</td>
      <td>{email}</td>
      <td className="text-center">{displayDetails}</td>
      <td className="text-center">{verifiedButton}</td>
    </tr>
  );
};

export default Row;
