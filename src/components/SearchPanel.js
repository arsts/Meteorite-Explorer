import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import { Input } from 'antd';

const Search = Input.Search;

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    searchTerm: state.searchTerm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class SearchPanel extends Component {
  render() {
    console.log(this.props.searchTerm);
    const {onSearchChange} = this.props;
    return (
      <Search
        placeholder="Search meteorite..."
        enterButton="Search"
        size="large"
        onChange={onSearchChange}
        style={{ margin: '1em 0 1em 0' }}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
