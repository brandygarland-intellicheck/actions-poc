import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        >
          {process.env.REACT_APP_SAMPLE_ENV}
        </h1>
      </header>
    </div>
  );
}

export default App;
