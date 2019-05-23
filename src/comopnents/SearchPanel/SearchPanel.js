import React, { Component } from 'react';
import { Form, Button, Container, InputGroup, Row } from 'react-bootstrap';

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
      <Container>
        
          <Form>      
            <InputGroup>
              <Form.Control
                type="text"
                size="lg"
                name="searchterm"
                placeholder="Enter meteorite name"
                value={this.props.searchTerm}
                onChange={this.handleSearchChange}
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  type="submit"
                  value="Submit"
                  size="lg"
                >
                  Submit
                </Button>
              </InputGroup.Append>
            </InputGroup>      
          </Form>
        
      </Container>

    )
  }
}

export default SearchPanel
