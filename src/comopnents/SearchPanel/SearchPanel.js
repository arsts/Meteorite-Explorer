import React, { Component } from 'react'

export class SearchPanel extends Component {

  render() {
    return (

        <form>
        <input 
        type="text" 
        placeholder="Enter meteorite name"
        
        onChange={this.onChange}
        >

        </input>
        <input 
        type="submit" 
        value="Submit"
        >
        </input>

        </form>

    )
  }
}

export default SearchPanel
