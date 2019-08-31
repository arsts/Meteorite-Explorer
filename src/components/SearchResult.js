import React from 'react';
import { connect } from 'react-redux';
import { requestMeteorites } from '../actions';
import { Table } from 'antd';



const { Column } = Table;

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchMeteorites.searchTerm,
    meteorites: state.requestMeteorites.meteorites,
    isPending: state.requestMeteorites.isPending,
    error: state.requestMeteorites.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMeteorites: () => dispatch(requestMeteorites())
  }
}



export class SearchResult extends React.Component {

  componentDidMount() {
    this.props.onRequestMeteorites()
  }

  render() {

    const {meteorites, isPending, error} = this.props;
    const filteredMeteorites = meteorites.filter(meteorite => meteorite.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

    return (
      <Table 
        dataSource={filteredMeteorites} 
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);




