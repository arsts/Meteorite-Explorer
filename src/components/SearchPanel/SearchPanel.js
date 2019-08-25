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
        onSearch={this.props.onSubmit}
        style={{ margin: '1em 0 1em 0' }}
      />
    )
  }
}

export default SearchPanel
