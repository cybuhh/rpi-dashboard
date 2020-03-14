import React from 'react';
import classnames from 'classnames/bind';

import Diskchart from 'components/Diskchart/Diskchart';

import styles from './App.scss';

const css = classnames.bind(styles);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://duckduckgo.com/i/0c1be8ce.png" className="logo" alt="logo" />
      </header>
      <main>
        <Diskchart title="stats title" className={css('disk')} />
      </main>
    </div>
  );
}

export default App;
