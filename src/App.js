import React, { Component } from 'react';
import './App.css';
import SearchPanel from './components/SearchPanel';
import SearchResult from './components/SearchResult';
import { Layout, message, Button } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
    
  render() {
    return (     
      <Layout>
          <Header className="App-header">
            <h1>Meteorite Explorer</h1>
          </Header>
         <Content style={{ padding: '0 50px' }}>
          <SearchPanel  
            style={{ margin: '16px 0' }}
          />
          <SearchResult />
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
