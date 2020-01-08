import React, { useState, useEffect } from 'react';
import axios from './axios-instance';
import { objectToArray } from './util/object-to-array';

import Navbar from './components/Navbar';
import AllParticipants from './components/AllParticipants/AllParticipants';

const App = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get('/participants.json');
    const data = await response.data;
    setParticipants(objectToArray(data));
  };

  return (
    <>
      <Navbar />
      <AllParticipants participants={participants} />
    </>
  );
};

export default App;
