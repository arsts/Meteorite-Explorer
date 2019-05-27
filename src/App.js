import React, { Component } from 'react';
import './App.css';
import SearchPanel from './comopnents/SearchPanel/SearchPanel';
import SearchResult from './comopnents/SearchResult/SearchResult';
import { Layout, message, Button } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteoritesData: [],
      searchTerm: ''
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(event) {
      if(event.target.value !== '') {
        this.setState({
          searchTerm: event.target.value
        });
      } else {
        return message.warn('Your meteorite search is empty')
      }

   }
 
  getMeteoriteData = () => 
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response =>
        {if(response.status === 200) {
          return response.json() 
          // && message.success('Fetched meteorites')
          } else {
          return message.error('Meteorites not fetched')
          }}
        )
      .catch(err => console.log(err))
      .then(data => this.setState({'meteoritesData': data}))

  componentDidMount() {
    this.getMeteoriteData();
  }
  
  
  render() {
    return (     
      <Layout>
          <Header className="App-header">
            <h1>Meteorite Explorer</h1>
          </Header>
         <Content style={{ padding: '0 50px' }}>
          <SearchPanel 
            onSubmit={this.handleSubmit}
            onSearchChange={this.handleChange} 
            style={{ margin: '16px 0' }}
          />
          <SearchResult 
            searchTerm={this.state.searchTerm}
            filterMeteorites={this.filterMeteorites} 
            meteoritesData={this.state.meteoritesData}
          />
          </Content>
          <Footer 
          style={{ textAlign: 'center' }}>
          <Button 
            type="primary" shape="circle" icon="github"
            href="https://github.com/arsts/meteorite-explorer"
          />
          </Footer>
      </Layout>   
    )
  }
}

export default App;
