
// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashbord from './components/Dashbord';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashbord/>
    </div>
  );
}

export default App;
