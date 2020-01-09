import React, { useState, useEffect } from 'react';
import axios from './axios-instance';
import { Switch, Route } from 'react-router-dom';

import { objectToArray } from './util/object-to-array';
import Navigation from './components/Navigation';
import Teams from './components/Teams/Teams';
import FourZeroFour from './components/FourZeroFour';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [displayTeams, setDisplayTeams] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDisplayTeams(teams);
  }, [teams]);

  useEffect(() => {
    let updatedDisplayTeams;
    let keyword = searchText.trim().toUpperCase();

    if (keyword) {
      updatedDisplayTeams = teams.filter(
        team => team.teamName.toUpperCase().indexOf(keyword) > -1
      );
    } else {
      updatedDisplayTeams = teams;
    }

    setDisplayTeams(updatedDisplayTeams);
    // eslint-disable-next-line
  }, [searchText]);

  const getData = async () => {
    try {
      const response = await axios.get('/participants.json');
      const data = await response.data;
      setTeams(objectToArray(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Navigation handleSearch={handleSearch} searchText={searchText} />
      <Switch>
        <Route path="/all" exact>
          <Teams teams={displayTeams} />
        </Route>
        <Route path="/verified" exact>
          <div className="container">
            <h1>verified</h1>
          </div>
        </Route>
        <Route path="/">
          <FourZeroFour />
        </Route>
      </Switch>
    </>
  );
};

export default App;
