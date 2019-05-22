import React, { Component } from 'react'

export class SearchPanel extends Component {
  


  
   
  

  render() {
    return (
      <div>
        <label></label>
        <input 
        type="text" 
        placeholder="Enter search items"
        
        onChange={this.onChange}
        >

        </input>
        <button>Submit</button>
      </div>
    )
  }
}

export default SearchPanel
