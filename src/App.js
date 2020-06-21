import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Filter from './components/filter/filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="Content">
        <Filter />
      </div>
    </div>
  );
}

export default App;
