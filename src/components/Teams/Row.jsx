import React, { useState } from 'react';

const Row = ({ serial, team, onVerify, position }) => {
  const [showDetails, setShowDetails] = useState(false);

  const {
    id,
    teamName,
    college,
    email,
    memberNames,
    memberPhones,
    isVerified
  } = team;

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

  const handleShow = () => {
    const updatedShowDetails = !showDetails;
    setShowDetails(updatedShowDetails);
  };

  const bgClasses = isVerified ? 'table-primary' : '';
  const showClasses = showDetails ? 'show' : '';
  const dropdownButtonColor = isVerified ? 'btn-primary' : 'btn-light';
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
