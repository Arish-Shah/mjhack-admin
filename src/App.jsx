import React, { useState, useEffect } from 'react';
import axios from './axios-instance';
import { Switch, Route, Redirect } from 'react-router-dom';

import { objectToArray } from './util/object-to-array';
import Navigation from './components/Navigation';
import Teams from './components/Teams/Teams';
import Verified from './components/Verified/Verified';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [displayTeams, setDisplayTeams] = useState([]);
  const [verifiedTeams, setVerifiedTeams] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setDisplayTeams(teams);
      const tempVerifiedTeams = teams.filter(team => team.isVerified);
      setVerifiedTeams(tempVerifiedTeams);
    }
    //eslint-disable-next-line
  }, [teams]);

  useEffect(() => {
    let updatedDisplayTeams;
    let updatedVerifiedTeams;
    let keyword = searchText.trim().toUpperCase();

    if (keyword) {
      updatedDisplayTeams = teams.filter(
        team => team.teamName.toUpperCase().indexOf(keyword) > -1
      );

      updatedVerifiedTeams = verifiedTeams.filter(
        team => team.teamName.toUpperCase().indexOf(keyword) > -1
      );
    } else {
      updatedDisplayTeams = teams;
      updatedVerifiedTeams = teams.filter(team => team.isCheckedIn);
    }

    setDisplayTeams(updatedDisplayTeams);
    setVerifiedTeams(updatedVerifiedTeams);
    // eslint-disable-next-line
  }, [searchText]);

  const getData = async () => {
    try {
      const response = await axios.get('/participants.json');
      const data = await response.data;
      setTeams(objectToArray(data));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const handleVerify = async id => {
    const updatedTeams = [...teams];
    const index = updatedTeams.findIndex(team => team.id === id);
    updatedTeams[index].isVerified = !updatedTeams[index].isVerified;
    setTeams(updatedTeams);

    // UPDATE REQUEST
    try {
      await axios.put(`/participants/${id}.json`, updatedTeams[index]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckIn = async id => {
    const updatedTeams = [...teams];
    const index = updatedTeams.findIndex(team => team.id === id);
    updatedTeams[index].isCheckedIn = !updatedTeams[index].isCheckedIn;
    setTeams(updatedTeams);

    // UPDATE REQUEST
    try {
      await axios.put(`/participants/${id}.json`, updatedTeams[index]);
    } catch (err) {
      setError(err.message);
    }
  };

  let displayError = error ? <Error message={error} /> : null;
  let total = teams.filter(team => team.isVerified).length;

  return (
    <>
      <Navigation
        handleSearch={handleSearch}
        searchText={searchText}
        refresh={getData}
      />
      {displayError}
      <Switch>
        <Route path="/all" exact>
          <Teams teams={displayTeams} onVerify={handleVerify} />
        </Route>
        <Route path="/verified" exact>
          <Verified
            total={total}
            teams={verifiedTeams}
            onCheckIn={handleCheckIn}
          />
        </Route>
        <Redirect from="/" to="/all" />
      </Switch>
    </>
  );
};

const Error = ({ message }) => (
  <div className="container">
    <div className="alert alert-danger">
      Something went wrong — <b>{message}</b>
    </div>
  </div>
);

export default App;
