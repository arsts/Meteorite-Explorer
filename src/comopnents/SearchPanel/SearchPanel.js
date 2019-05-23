import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Form>
        <Form.Group controlId="formBasicEmail">
        <Container>
          <Row>
            <Col>
              <Form.Control
                type="text"
                size="lg"
                name="searchterm"
                placeholder="Enter meteorite name"
                value={this.props.searchTerm}
                onChange={this.handleSearchChange}
              />
            </Col>
            <Col md="auto">
                <Button
                  variant="primary"
                  type="submit"
                  value="Submit"
                  size="lg"
                >
                  Submit
                </Button>
            </Col>
          </Row>
        </Container>
          
        
        </Form.Group>
        
      </Form>

    )
  }
}

export default SearchPanel
