import React, { Component } from 'react';
import './App.css';
import SearchPanel from './comopnents/SearchPanel/SearchPanel';
import SearchResult from './comopnents/SearchResult/SearchResult';




 class App extends Component {
  constructor() {
    super();
    this.state = {
      'meteoriteData': []
      
    }
  }

  getMeteoriteData = () => 
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
     .then(response => response.json())
     .then(data => this.setState({'meteoriteData': data}));

  componentDidMount() {
    this.getMeteoriteData();
    console.log(this.state.meteoriteData);
    
  }
  
  
  render() {
    return (        
    <div className="App">
          <header className="App-header">
            <h1>Meteorite Explorer</h1>
            <SearchPanel />
            <SearchResult meteoriteData={this.state.meteoriteData} />
          </header>
        </div>
    )
  }
}

export default App;
