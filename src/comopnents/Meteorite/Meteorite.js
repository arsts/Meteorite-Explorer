import React, { Component } from 'react'

class Meteorite extends Component {
  render() {
    const { name, id, nametype, recclass, mass, fall, year, reclat, reclong } = this.props.meteorite;

    
    
    return (  
        <tr>
          <td>{name}</td>
          <td>{id}</td>
          <td>{nametype}</td>
          <td>{recclass}</td>
          <td>{mass}</td>
          <td>{fall}</td>
          <td>{year}</td> 
          <td>{reclat}</td> 
          <td>{reclong}</td> 
        </tr>
      ) 
      } 
  }


export default Meteorite;
