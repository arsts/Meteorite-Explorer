import React, { Component } from 'react';

import { connect } from 'react-redux';
import './App.css';
import GET_METEORITES_DATA from './actions';
import SearchPanel from './components/SearchPanel/SearchPanel';
import SearchResult from './components/SearchResult/SearchResult';
import { Layout, message, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const mapStateToProps = state => {
  return {
    meteoritesData: state.meteoritesData
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // meteoritesData: [],
      searchTerm: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(value, event) {
      if(value !== '') {
        this.setState({
          searchTerm: value
        });
      } else {
        return message.warn('Your meteorite search is empty') && this.setState({ searchTerm: '' })
      }
   }
 
  getMeteoriteData = () => 
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then(response =>
        {if(response.status === 200) {
          console.log('Meteorites arrived!');
          
          return response.json() 
          // && message.success('Fetched meteorites')
          } else {
          return message.error('Meteorites not fetched')
          }}
        )
      .catch(err => console.log(err))
      .then(data =>  this.props.dispatch(GET_METEORITES_DATA(data))
        )

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
              style={{ margin: '16px 0' }}
            />
            <SearchResult 
              searchTerm={this.state.searchTerm}
              filterMeteorites={this.filterMeteorites} 
              
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

export default connect(mapStateToProps)(App);
