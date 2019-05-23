import React, { Component } from 'react'

export class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(e) {
    this.props.onSearchChange(e.target.value);
  }
  
  render() {
    return (
        <form>
        <input 
        type="text" 
        name="searchterm"
        placeholder="Enter meteorite name"
        value={this.props.searchTerm}
        onChange={this.handleSearchChange}
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
