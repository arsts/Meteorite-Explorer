import React from 'react';
import { Table } from 'react-bootstrap';
import Meteorite from '../Meteorite/Meteorite';

export class SearchResult extends React.Component {
  render() { 
    const searchTerm = this.props.searchTerm;
    const filteredMeteorites = this.props.meteoritesData.filter(meteorite => meteorite.name.toLowerCase().includes(searchTerm.toLowerCase())); 
    
    return (
      
      
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Name Type</th>
              <th>Rec Class</th>
              <th>Mass (g)</th>
              <th>Fall</th>
              <th>Year</th>
              <th>Latitude</th>
              <th>Longitude</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredMeteorites.map(meteorite => (
              <Meteorite key={meteorite.id} meteorite={meteorite} />
            ))}     
          </tbody>
        </Table>   
      )   
    } 
  } 

export default SearchResult




// /<Table striped bordered hover>
//   <thead>
//     <tr>

//       <th>#</th>
//       <th>Tset</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <Meteorite />
//     <Meteorite />
//     <Meteorite />
//     <Meteorite />

//   </tbody>
// </Table>