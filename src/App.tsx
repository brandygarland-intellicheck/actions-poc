import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        >
          {process.env.REACT_APP_SAMPLE_ENV}
        </h1>

        <p>{process.env.REACT_APP_TEST_NON_SENSITIVE}</p>
      </header>
    </div>
  );
}

export default App;
