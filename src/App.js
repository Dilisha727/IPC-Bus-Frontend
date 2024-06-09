import React, { useState, useEffect } from 'react';
import './App.css';
import BusMap from './BusMap';
import NavBar from './NavBar';

const App = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/buses')
      .then(response => response.json())
      .then(data => {
        console.log('Bus data from API:', data);
        setBuses(data);
      })
      .catch(error => console.error('Error fetching buses:', error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <BusMap buses={buses} />
    </div>
  );
};

export default App;
