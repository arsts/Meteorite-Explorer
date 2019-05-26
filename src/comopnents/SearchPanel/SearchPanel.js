import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class SearchPanel extends Component {
  render() {
    return (
      <Search
        placeholder="Search meteorite..."
        enterButton="Search"
        size="large"
        value={this.props.searchTerm}
        onChange={this.props.onSearchChange}
        onSubmit={this.handleSubmit}
        style={{ margin: '1em 0 1em 0' }}
      />
    )
  }
}

export default SearchPanel
