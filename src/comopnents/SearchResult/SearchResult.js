import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

export class SearchResult extends React.Component {
  render() {
    return (
      <Table 
        dataSource={this.props.meteoritesData.filter(meteorite => meteorite.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))} 
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

export default SearchResult




