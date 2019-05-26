import React from 'react';
import Meteorite from '../Meteorite/Meteorite';
import { Table } from 'antd';

const { Column } = Table;

export class SearchResult extends React.Component {
  render() { 
    const searchTerm = this.props.searchTerm;
    const filteredMeteorites = this.props.meteoritesData.filter(meteorite => meteorite.name.toLowerCase().includes(searchTerm.toLowerCase())); 
    
    return (
      <Table dataSource={filteredMeteorites} size="middle">
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
      // <Container>
      //   <Table responsive striped bordered hover>
      //       <thead>
      //         <tr>
      //           <th>Name</th>
      //           <th>Id</th>
      //           <th>Name Type</th>
      //           <th>Rec Class</th>
      //           <th>Mass (g)</th>
      //           <th>Fall</th>
      //           <th>Year</th>
      //           <th>Latitude</th>
      //           <th>Longitude</th>
                
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {filteredMeteorites.map(meteorite => (
      //           <Meteorite key={meteorite.id} meteorite={meteorite} />
      //         ))}     
      //       </tbody>
      //     </Table>   
          
      // </Container>
      )   
    } 
  } 

export default SearchResult




