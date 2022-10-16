import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Trip from './components/Trip';
import data from './data';

function App() {
  const trips = data.map(trip => {
    return <Trip {...trip} />
  });

  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        {trips}
      </div>
    </div>
  );
}

export default App;
