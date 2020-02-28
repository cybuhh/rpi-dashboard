import React from 'react';
import './App.scss';
import Statsblock from 'components/Statsblock/Statsblock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://duckduckgo.com/i/0c1be8ce.png" className="logo" alt="logo" />
      </header>
      <main>
        <Statsblock title="stats title" />
        <Statsblock title="other stats title" />
      </main>
    </div>
  );
}

export default App;
