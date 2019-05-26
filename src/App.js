import React, { Component } from 'react';
import './App.css';
import SearchPanel from './comopnents/SearchPanel/SearchPanel';
import SearchResult from './comopnents/SearchResult/SearchResult';
import { Layout, Menu, Breadcrumb, message } from 'antd';

const { Header, Content, Footer } = Layout;



 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteoritesData: [],
      searchTerm: ''
    }
  }

   onSearchChange = (event) => {
     this.setState({
       searchTerm: event.target.value
     });
   }
    
  getMeteoriteData = () => 
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
     .then(response =>
      {if(response.status === 200) {
        return response.json()
        } else {
        return message.error('This is a message of error')
        }}
      )
     .then(data => this.setState({'meteoritesData': data}));

  componentDidMount() {
    this.getMeteoriteData();
    console.log(this.state.meteoritesData);
  }
  
  
  render() {
    return (     
      <Layout>
          <Header className="App-header">
            <h1>Meteorite Explorer</h1>
          </Header>
         <Content style={{ padding: '0 50px' }}>
          <SearchPanel 
            searchTerm={this.state.searchTerm}
            // onSubmit={this.handleSubmit}???
            onSearchChange={this.onSearchChange} 
            style={{ margin: '16px 0' }}
          />
          <SearchResult 
            searchTerm={this.state.searchTerm} 
            meteoritesData={this.state.meteoritesData} 
          />
          </Content>
          <Footer 
          style={{ textAlign: 'center' }}>
            Footer
          </Footer>
      </Layout>   
    )
  }
}

export default App;
