import React from 'react';
import './App.css';
import SearchPanel from './comopnents/SearchPanel/SearchPanel';
import SearchResult from './comopnents/SearchResult/SearchResult';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meteorite Explorer</h1>
        <SearchPanel />
        <SearchResult />
      </header>
    </div>
  );
}

export default App;
