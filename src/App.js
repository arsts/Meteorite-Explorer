import React, { Component } from 'react';
import './App.css';
import SearchPanel from './comopnents/SearchPanel/SearchPanel';
import SearchResult from './comopnents/SearchResult/SearchResult';




 class App extends Component {
  constructor() {
    super();
    this.state = {
      meteoritesData: [],
      searchTerm: ''
      
    }
  }

  getMeteoriteData = () => 
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
     .then(response => response.json())
     .then(data => this.setState({'meteoritesData': data}));

  componentDidMount() {
    this.getMeteoriteData();
    console.log(this.state.meteoritesData);
  }
  
  
  render() {
    return (        
    <div className="App">
          <header className="App-header">
            <h1>Meteorite Explorer</h1>
            <SearchPanel searchTerm={this.state.searchTerm} />
          </header>
          <main>
            <SearchResult meteoritesData={this.state.meteoritesData} />
          </main>
          <footer>

          </footer>

        </div>
    )
  }
}

export default App;
