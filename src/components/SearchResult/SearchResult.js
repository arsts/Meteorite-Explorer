import React from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import store from 'c:/Users/A/Documents/WebDev/meteorite-explorer/src/store'
const { Column } = Table;

const mapStateToProps = state => {
  return state.meteoritesData
}

// this.props.meteoritesData.filter(meteorite => meteorite.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

export class SearchResult extends React.Component {

  fillTable = (meteoritesData) => {
    return meteoritesData.filter(meteorite => meteorite.name
      .toLowerCase()
      .includes(this.props.searchTerm.toLowerCase()))
  }

  render() {
    const test = this.props.meteoritesData;
    console.log([...test].length());
    
    // console.log(this.props.meteoritesData);
    
    
    return (
      <Table 
        dataSource={""} 
        size="middle"
        rowKey="id"
        >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Name Type" dataIndex="nametype" key="nametype" />
        <Column title="Rec Class" dataIndex="recclass" key="recclass" />
        <Column title="Mass (g)" dataIndex="mass" key="mass" />
        <Column title="Fall" dataIndex="fall" key="fall" />
        <Column title="Year" dataIndex="year" key="year" />
        <Column title="Latitude" dataIndex="reclat" key="reclat" />
        <Column title="Longitude" dataIndex="reclong" key="reclong" />
      </Table>
      )   
    } 
  } 

export default connect(mapStateToProps)(SearchResult)




