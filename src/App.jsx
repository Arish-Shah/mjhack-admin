import React, { useState, useEffect } from 'react';
import axios from './axios-instance';
import { objectToArray } from './util/object-to-array';

import Navigation from './components/Navigation';
import Teams from './components/Teams/Teams';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get('/participants.json');
    const data = await response.data;
    setTeams(objectToArray(data));
  };

  return (
    <>
      <Navigation />
      <Teams teams={teams} />
    </>
  );
};

export default App;
